var owl = $(".owl-carousel");

// Initialize Owl Carousel
owl.owlCarousel({
    loop: true,
    items: 1,
    onInitialized: function(event) { // Get center item on page load
        getCurrentItem(event);
    }
});

// Event listener for when the carousel changes
owl.on('changed.owl.carousel', function(event) {
    getCurrentItem(event);
});

// Function to get the current center item's ID
function getCurrentItem(event) {
    var current = event.item.index;
    var data = $(event.target).find(".owl-item").eq(current).find("button").attr('id');

    console.log('Current Item ID:', data);

    if (data) {
        sendValueToBackend(data);
    }
}

// Function to send the value to Django using AJAX
function sendValueToBackend(value) {
    $.ajax({
        url: "/update-center-item/",
        type: "POST",
        headers: { "X-CSRFToken": getCSRFToken() }, // CSRF protection
        data: JSON.stringify({ center_value: value }),
        contentType: "application/json",
        success: function(response) {
            console.log("Response from backend:", response);
        },
        error: function(error) {
            console.error("Error:", error);
        }
    });
}

// Function to get CSRF token for Django AJAX requests
function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
}



from django.http import JsonResponse
import json

def update_center_item(request):
    if request.method == "POST":
        data = json.loads(request.body)
        center_value = data.get("center_value")
        print("Received center item:", center_value)
        return JsonResponse({"message": "Center item updated", "center_value": center_value})
    return JsonResponse({"error": "Invalid request"}, status=400)


from django.urls import path
from .views import update_center_item

urlpatterns = [
    path('update-center-item/', update_center_item, name='update_center_item'),
]