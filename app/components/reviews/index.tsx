import ReviewsBlocks from "@/app/components/reviews/reviews-blocks";
import OvalText from "@/app/components/reviews/oval-text";
import CustomMainText from "@/app/components/custom-main-text/custom-main-text";

const users = [
    {
        title: "I love how this site is set up you can quickly click on profiles you like and send them a message right away! There’s no BS on this site.",
        userImg: "/review-1.png",
        name: "Maria Hilbert",
        location: "Los Angeles, USA"
    },
    {
        title: "Finally found men who are straight with their intentions. I can’t wait to tell my girlfriends about this site :)",
        userImg: "/review-2.png",
        name: "Angela Taylor",
        location: "Houston, Texas"
    },
]

const Reviews = () => {
    return(
        <div className='px-4'>
        <OvalText/>
            <CustomMainText value='Experience the magic through our users’ testimonials'/>
<ReviewsBlocks users={users}/>

        </div>
    );
}
export default Reviews;