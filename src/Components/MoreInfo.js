import React from 'react'
import { useSelector } from 'react-redux';
import CastDetails from './CastDetails';
import { IMG_CDN_URL } from '../utils/constants';

const MoreInfo = () => {

    const details = useSelector(store => store?.movies?.castDetail);
    const movieDetail = useSelector((store) => store.movies.movieDetail);



    if (!details) return;

    // console.log(details.id);
    console.log(details?.cast[0]?.original_name);
    // console.log(details.cast);


    const { original_name, profile_path } = details?.cast[0];
    // console.log(original_name);

    const actors = details?.cast.map((actor) => actor.original_name);
    // console.log(actors)
    const director = details?.crew.filter((f) => f.job === "Director");
    console.log(director)



    // const { original_name, profile_path } = castDetails.cast;
    // console.log(original_name)



    return (
        <div className='absolute bg-black text-white -mt-36'>
            {/* <h1>MoreInfo</h1> */}

            {/* <h1 className='text-3xl text-center'>Details</h1> */}
            {/* <h1 className='text-1xl'>More Info</h1> */}

            {/* <div className='flex overflow-x-scroll no-scrollbar'>
                {details?.cast.map((actor =>
                    <CastDetails name={actor.original_name} posterPath={actor.profile_path} />
                ))}
            </div> */}
            {/* <div className="md:text-6xl text-2xl flex text-yellow-400">
                {movieDetail?.original_title} (
                {new Date(movieDetail?.release_date).getFullYear()})
            </div> */}
            <div className="text-yellow-400 text-sm md:text-none mb-3">{movieDetail?.tagline}</div>
            <div className="flex">
                <span className="text-xl  text-white mt-3">IMDB Rating : </span>
                <div className="mt-2 ml-2">
                    <p className=" bg-yellow-400 text-black font-bold w-12 h-12 text-center pt-2 border border-yellow-400  rounded-[100%]">{movieDetail?.vote_average.toFixed(1)}</p>
                </div>
            </div>
            <div>
                <h1 className="text-xl  text-white mt-3 mb-3">Overview :</h1>
                <div className="text-sm md:w-[65%]">{movieDetail?.overview}</div>
            </div>


            {director?.length > 0 && (
                <div className=" mt-7 text-white border border-t-gray-600 border-b-gray-600 pt-2 pb-2 border-r-0 border-l-0">
                  <span className="mr-2" >
                    Director  :  {"  "}
                  </span>
                  <span className="text-gray-400">
                    {director?.map((d, i) => (
                      <span key={i}>
                        {d.name}
                        {director.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              
            <div className="overflow-x-scroll no-scrollbar">
                <span className="flex w-[2000px] ">
                    {details?.cast.map((actor) => {
                        if (!actor.profile_path) return null;
                        return (
                            <div className="" key={actor.id}>
                                <div >
                                    <div className="p-3  w-[100px]">
                                        <img className="h-[85px] rounded-2xl" alt="profile_image" src={IMG_CDN_URL + actor.profile_path} />
                                    </div>
                                    <div className="w-[90px] text-[10px] m-auto">{actor.name}</div>
                                    <div className="text-[12px] w-[50px] h-[20px] overflow-clip text-gray-400 m-auto">{actor.character}</div>
                                </div>
                            </div>
                        )
                    })}
                </span>
            </div>





            {/* {details?.cast[0].profile_path} */}
        </div>
    )
}

export default MoreInfo
