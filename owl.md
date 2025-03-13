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


$(document).ready(function () {
    var owl = $(".owl-carousel");

    // Get current date from the hidden input (passed from Django)
    var currentDate = $("#current-date").val(); // Example: "2025-03-12"
    var currentTime = new Date(); // Get current time

    // Initialize Owl Carousel
    owl.owlCarousel({
        loop: false,
        items: 1,
        onInitialized: function () {
            appendTimeSlots(currentDate);
            hidePastTimeSlots();
            owl.trigger("refresh.owl.carousel"); // Refresh after updating items
        }
    });

    // Function to append time slots dynamically
    function appendTimeSlots(date) {
        let startHour = 10; // 10 AM
        let endHour = 22;   // 10 PM

        for (let hour = startHour; hour <= endHour; hour++) {
            let formattedTime = formatTime(hour);
            let slotTime = `${date} ${hour}:00`;

            $(".owl-carousel").trigger("add.owl.carousel", [
                `<div class="item time-slot" data-time="${slotTime}">${formattedTime}</div>`
            ]);
        }
    }

    // Function to hide past time slots
    function hidePastTimeSlots() {
        $(".time-slot").each(function () {
            let slotTimeStr = $(this).data("time"); // Example: "2025-03-12 14:00"
            let slotTime = new Date(slotTimeStr); // Convert to Date object

            if (slotTime < currentTime) {
                $(this).hide(); // Hide past time slots
            }
        });
    }

    // Function to format time in AM/PM
    function formatTime(hour) {
        let period = hour >= 12 ? "PM" : "AM";
        let displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:00 ${period}`;
    }
});