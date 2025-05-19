
import SplashNavbar from "@/components/reusableComponents/Navbar";
import Navbar from "@/components/reusableComponents/Navbar/Navbar";

import FeatureSection from "@/components/scaffoldingComponents/PageSectionWrapper/FeatureSection";
import ArticleShowcaseSection from "@/components/scaffoldingComponents/PageSectionWrapper/ArticleShowcaseSection";
import ScreenOptionsSection from "@/components/scaffoldingComponents/PageSectionWrapper/ScreenOptionsSection";
import TestimonialCardSection from "@/components/scaffoldingComponents/PageSectionWrapper/TestimonialCardSection";
import LogoShowcaseSection from "@/components/scaffoldingComponents/PageSectionWrapper/LogoShowcaseSection";

import FaqsSearchableSection from "@/components/scaffoldingComponents/PageSectionWrapper/FaqsSearchableSection";


import image from "@/public/icons/email-received-icon.svg";
import image2 from "@/public/icons/email-remove-delete-icon.svg";




const sectionObjArr = [
  {
    h1: "Host Your Event,",
    h2: "Anytime!",
    p: "Outdoor media has always struggled in the sun, but our daylight screens are changing the game. Enjoy the freedom and flexibility to host events seamlessly, even under the brightest of skies!",
    imageSrc: image,
  },
  {
    h1: "No Space?",
    h2: "No Problem.",
    p: "Unlock your venue's potential. Our daylight screens fit to your venue, not the other way around.",
    imageSrc: image2,
  },

];

const faqsArrObj = [
  {
    question: "What do I need to provide to secure my booking?",
    answer: "After you receive your quote(s) and confirm that you want to book a specific screen on a specific date, we will pencil you into our booking system. However, your booking is not secure until we receive a signed service agreement and at least 50% of the full payment for the event. If someone else wants to book the same screen on the same day, you will be informed of the conflict, and we will discuss if and when you want to secure your booking.",
  },
  {
    question: "When is the full payment required for the event?",
    answer: "1 month prior to the event date! If you are booking your event and it is less than 1 month away, we require full payment to secure your booking.",
  }, 
  {
    question: "What if the weather is bad for my event? Can I reschedule or rebook the event?",
    answer: "Yes! When your event is cancelled due to weather, we will apply 100% of your payment as credit towards your next event within 6 months. You may request an extension beyond the 6 month period, but we will assess this on a case-by-case basis. Also, depending on when your event was cancelled, we may charge a rebooking fee.",
  },
  {
    question: "Do I get a refund if I cancel my event?",
    answer: "No, you do not get a refund if your event is cancelled. However, you will receive a 100% credit towards another event within 6 months. Rebooking events in this way may incur a rebooking fee or date change fee depending on when the event was cancelled.",
  },
  {
    question: "What is the fee for rebooking a cancelled event?",
    answer: "$0 if you cancel the event 24 hours before the event crew mobilizes. $225 if you cancel the event within 24 hours prior to the time the event crew mobilizes. Cancelling an event after the event crew mobilizes typically incurs a rebooking fee of $500-$1000, but it could be more, because it is calculated based on the resources spent attempting to execute the event before it was cancelled.",
  },
  {
    question: "When should the decision to cancel or rebook an event be made?",
    answer: "24 hours before the event crew mobilizes. Event crews usually mobilize around 1pm, so you will likely avoid a rebooking fee if you cancel/rebook your event before 12pm on the day before your event. However, if you want a specific deadline for cancelling/rebooking your event, you can email us!",
  },
  {
    question: "What format should the presentation be provided in?",
    answer: "Movies can be provided on 2 discs DVD or Blu-ray, not 4k Blu-ray. Other presentations can be provided on a USB in .mp4 format, a laptop with the presentation ready-to-go, or an HDMI feed.",
  },
  {
    question: "Why do you require that I provide 2 discs for movie events?",
    answer: "Movie discs are reliable, but sometimes, movie discs come out of the box defective or damaged from shipping. You cannot be certain that a movie disc will work and you don't want to be stranded in the middle of the movie scrambling for a solution. Getting 2 copies of the same movie or a combo pack with 2 discs is a cost-effective measure to prevent that risk. Also, it allows us to play both discs simultaneously, so that if a disc failure occurs, we can switch seamlessly from 1 disc to the other.",
  },
  {
    question: "I want to make announcements before the presentation begins, will you have a microphone ready for us?",
    answer: "Yes! We can set up a microphone at your request. You can let us know during the booking and planning phase via email, or you can inform the FAM event staff on-site.",
  },
  {
    question: "I have sponsors that require recognition for funding my event. What options do I have?",
    answer: "We can display any logos or videos that you want including promotional content, such as slides/logos and videos for your sponsors. During the booking and planning phases of your event, we will discuss your presentation. If you are already have sponsors or you are seeking sponsors, you should consider how and when you want to fit their promotional content into the presentation. For example, promotional content could be played before the presentation, after the presentation, during an intermission, etc. We recommend offering 'time slots' for video content, such as 30s or 60s.",
  },
  {
    question: "What is a custom preshow?",
    answer: "A custom preshow is a presentation 'segment' that is composed of custom content that you send to us. It is very common to play promotional content for your event sponsors, but you can play almost anything you want. For example, if you are a business, you could showcase your projects, or if you are a community association, you could showcase previous events and advertise upcoming events. In fact, if we compile your main presentation from a collection of images or videos you send us, we will treat this as a 'custom preshow.'",
  },
  {
    question: "Are there any charges or fees for custom preshows?",
    answer: "Yes, we will send you a separate bill for compiling your custom preshow. It is calculated based on the amount of content you send us, but it typically costs about $40-$100. If you are interested in doing a custom preshow, we will send you a custom preshow ratesheet via email. Once you give us a list of content or send us the content via email or cloud-storage link, then we can send you a quote and request confirmation that you'd like to proceed with the custom preshow.",
  },
  {
    question: "Why is there a fee for custom preshows?",
    answer: "We optimize the content to played on our screen systems, and we test the playback media, so we can be 100% sure it plays successfully on your event day.",
  },
  {
    question: "How should custom preshow content be provided to you?",
    answer: "Images should be provided in .jpg or .png file format or .pptx slideshow format. Videos should be provided in .mp4 format. A full list of acceptable file formats is included in the custom preshow ratesheet, which you can request via email. You can send us the content via cloud-storage services like Box, Dropbox, Onedrive, Google Drive, etc. We can provide you with an upload link as well. Lastly, if you prefer, you can send images over email, but you may need to split up all the files, because emails have size limatations.",
  },
  {
    question: "What is a custom preshow for movie events?",
    answer: "Custom preshows for movie events follow a specific framework. First, the logo loop or slideshow, which can be any length. Second, the preshow video, which we recommend limiting to 5min. Finally, the movie. Any static images are played on repeat in the logo loop or slideshow until the scheduled movie start time. Any videos are played only once starting at the scheduled movie start time. The movie is played immediately after the preshow video, and we transition between the preshow video and movie seamlessly.",
  },
  {
    question: "What is a custom preshow for non-movie events?",
    answer: "Any part of the presentation that we compile or edit. A 'custom preshow' for non-movie events is not limited to preshow content, we can compile your content into a preshow, main presentation, intermission video, closing video, etc. It is common to separate static images and logos from video content, but it is not uncommon to deviate from that pattern either.",
  },
  {
    question: "Why do you recommend keeping static images and video content separate for custom preshows?",
    answer: "We do not recommend having static images play without background audio in most cases. Mixing video content with static images creates periods of time where it is silent. This isn't an issue if the screen system is not the center of attention.",
  },
  {
    question: "When should I send custom preshow content to you?",
    answer: "A minimum of 2 weeks prior to the event day, otherwise, we may add a rush fee to your custom preshow bill. If you cannot meet this deadline, notify us as soon as possible and we can negotiate a later deadline. Please note that sending content too late limits our ability to revise the custom preshow after we send it back to you for review.",
  },
];





export default function Home() {


  return (
    <main >

      <Navbar />

      {
        sectionObjArr.map((sectionObj, index) => <FeatureSection key={`home page feature section ${index}`} sectionObj={sectionObj} />)
      }



      <ArticleShowcaseSection />

      <ScreenOptionsSection />

      <TestimonialCardSection />

      <LogoShowcaseSection />

      <FaqsSearchableSection faqsArrObj={faqsArrObj} />

    </main>
  );
}
