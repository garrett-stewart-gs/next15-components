// import desired results images here
import loadingSpinner from "@/public/loadingSpinners/Spinner@1x-1.0s-200px-200px.svg";
import emailSuccessIcon from "@/public/icons/email-received-icon.svg";
import emailFailedIcon from "@/public/icons/email-remove-delete-icon.svg";

// import desired server action here 
import sendFormResultsViaEmail from "@/utils/actions/sendFormResultsViaEmail";

const customFormSubmissionHandler = async (data, setSubmissionResult) => {
  console.log('form submission logic goes here');
  console.log('formdata: ', data);

  try {
    // run server action
    const response = await sendFormResultsViaEmail(data);
    // return true if successful
    if (response.ok) return setSubmissionResult(true);
    //return false if unsuccessful
    if (!response.ok) return setSubmissionResult(false);
  } catch (error) {
    setSubmissionResult(false);
  }
};

// INVOKE FUNCTION TO RETURN FORM CONFIG 
// FORM CONFIG STRUCTURES FORM SECTIONS, INPUTS, AND INPUT OPTIONS
// Any Questions that cause conditional rendering (via shouldRenderFn) should be located in the first section, or you will see styling issue with horizontal carousel, because shouldRenderFn will result in array length mutations
/*
FORMAT OF formSectionArr element
  {
    sectionTitle: '',
    sectionSubTitle: '',
    shouldRenderFn: () => {return true}, // used to contitionally render sections based on user's inputs. true === should render, false === should not render
    sectionInputsArr: [
      {
        inputTitle: "",
        inputType: "",
        inputName: "",
        inputLabel: "",
        inputPlaceholder: "",
        inputValue: "",
        inputCalendarMode: "",
        inputCalendarStartDate: "",
        inputCalendarDisabledBeforeDate: "",
        inputCalendarEndDate: "",
        inputRegisterObj: {
          required: { value: true, message: "Field Required" },
        },
        inputOptions: [
          {
            optionTitle: "",
            optionType: "",
            optionName: "",
            optionLabel: "",
            optionPlaceholder: "",
            optionValue: "",
            optionCalendarMode: "",
            optionCalendarStartDate: "",
            optionCalendarDisabledBeforeDate: "",
            optionCalendarEndDate: "",
            optionRegisterObj: {
              required: { value: true, message: "Field Required" },
          },
          },
        ],
      },
    ],
  },
*/
// this is a function that returns an object, because the react-hook-form must be instantiated first
// the returned config object uses getValues, clearErrors, and watch inside each input's or option's validate property
export const generateFormConfig = (getValues, setValue, clearErrors, watch, trigger) => {
  return [
    {
      // misc form controls here (this object ignored by form section sorting)
      formName: 'Request For Quote Form',
      onCustomSubmit: (data, setSubmissionResult) => customFormSubmissionHandler(data, setSubmissionResult), // on line 2
      submissionSuccessInfo: {
        title: "Stay tuned!",
        subTitle: "Your form submission was successful.",
        message: "We will be in contact with you shortly to discuss your needs and provide you with a quote!",
        imageSrc: emailSuccessIcon,
      },
      submissionFailureInfo: {
        title: "Whoops!",
        subTitle:"Your form submission failed.",
        message: "Please try again or call us at: 403-358-4285.",
        imageSrc: emailFailedIcon,
      },
      submissionLoadingInfo: {
        title: "Please Wait...",
        subTitle:"Your form submission is processing.",
        message: "This won't take long!",
        imageSrc: loadingSpinner,
      },
    },
    {
      sectionTitle: 'Step 1',
      sectionSubTitle: 'Contact Information',
      shouldRenderFn: () => { return true; },
      sectionInputsArr: [
        {
          inputTitle: "",
          inputType: "text",
          inputName: "firstName",
          inputLabel: "",
          inputPlaceholder: "First Name",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "",
          inputType: "text",
          inputName: "lastName",
          inputLabel: "",
          inputPlaceholder: "Last Name",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "",
          inputType: "text",
          inputName: "organizationName",
          inputLabel: "",
          inputPlaceholder: "Organization Name",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {},
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "",
          inputType: "email",
          inputName: "email",
          inputLabel: "",
          inputPlaceholder: "Email",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            pattern: { value: /^[^\s@]+@[^\s@]+\.(com|ca|net|org|io|gov|edu|[a-zA-Z]{2,})$/, message: "Invalid Email Format" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Phone Number:",
          inputType: "tel",
          inputName: "phoneNumber",
          inputLabel: "",
          inputPlaceholder: "First Name",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            minLength: { value: 10, message: "Phone Number must have 10 digits" },
            maxLength: { value: 10, message: "Phone Number must have 10 digits" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit1",
              optionLabel: "",
              optionPlaceholder: "4",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit2",
              optionLabel: "",
              optionPlaceholder: "0",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit3",
              optionLabel: "",
              optionPlaceholder: "3",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit4",
              optionLabel: "",
              optionPlaceholder: "5",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit5",
              optionLabel: "",
              optionPlaceholder: "5",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit6",
              optionLabel: "",
              optionPlaceholder: "5",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit7",
              optionLabel: "",
              optionPlaceholder: "1",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit8",
              optionLabel: "",
              optionPlaceholder: "2",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit9",
              optionLabel: "",
              optionPlaceholder: "3",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
            {
              optionTitle: "",
              optionType: "digit",
              optionName: "phoneDigit10",
              optionLabel: "",
              optionPlaceholder: "4",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
                pattern: { value: /[0-9]/, message: "You can only enter single digit numbers" }
              },
            },
          ],
        },
        {
          inputTitle: "Would you like to Rent or Buy a screen system?",
          inputType: "radio",
          inputName: "rentOrBuySelection",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "rentOrBuySelection",
              optionLabel: "Rent",
              optionPlaceholder: "",
              optionValue: "Rent",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "rentOrBuySelection",
              optionLabel: "Buy",
              optionPlaceholder: "",
              optionValue: "Buy",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "What type of screen system would you like?",
          inputType: "radio",
          inputName: "daylightOrInflatableSelection",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            validate: (inputValue) => {
              clearErrors('eventTimeSelection');
              if (inputValue === 'Inflatable' && getValues('eventTimeSelection') === 'Daytime') {
                return "Inflatable screens cannot be used before sunset";
              };
            },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "daylightOrInflatableSelection",
              optionLabel: "Daylight Screen",
              optionPlaceholder: "",
              optionValue: "Daylight",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "daylightOrInflatableSelection",
              optionLabel: "Inflatable Screen",
              optionPlaceholder: "",
              optionValue: "Inflatable",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Will your presentation(s) occur in the daylight or before sunset?",
          inputType: "radio",
          inputName: "eventTimeSelection",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            validate: (inputValue) => {
              clearErrors('daylightOrInflatableSelection');
              if (inputValue === 'Daytime' && getValues('daylightOrInflatableSelection') === 'Inflatable') {
                return "Inflatable screens cannot be used before sunset";
              }
            }
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "eventTimeSelection",
              optionLabel: "Yes",
              optionPlaceholder: "",
              optionValue: "Daytime",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "eventTimeSelection",
              optionLabel: "No",
              optionPlaceholder: "",
              optionValue: "Nighttime",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Step 2',
      sectionSubTitle: 'Venue Information',
      shouldRenderFn: () => {
        if (watch('rentOrBuySelection') !== 'Rent') return false;
        return true;
      },
      sectionInputsArr: [
        {
          inputTitle: "Where will your event take place?",
          inputType: "location",
          inputName: "rentalEventLocation",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "text",
              optionName: "rentalEventLocationCity",
              optionLabel: "",
              optionPlaceholder: "City",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "text",
              optionName: "rentalEventLocationProvince",
              optionLabel: "",
              optionPlaceholder: "AB, BC, SK, ON",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Do you have a venue reserved?",
          inputType: "radio",
          inputName: "rentalVenueStatus",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "rentalVenueStatus",
              optionLabel: "Yes!",
              optionPlaceholder: "",
              optionValue: "Venue chosen and secured",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "",
              optionName: "rentalVenueStatus",
              optionLabel: "No, but I have one in mind",
              optionPlaceholder: "",
              optionValue: "Venue chosen but not secured",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "",
              optionName: "rentalVenueStatus",
              optionLabel: "Where do I begin?",
              optionPlaceholder: "",
              optionValue: "Needs Guidance",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "How many audience members will attend your event?",
          inputType: "number",
          inputName: "rentalAudienceSize",
          inputLabel: "",
          inputPlaceholder: "100, 300, 1000, etc.",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            min: { value: 0, message: "Cannot Use Negative Values",} 
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Step 2',
      sectionSubTitle: 'Order Information',
      shouldRenderFn: () => {
        if (watch('rentOrBuySelection') !== 'Buy') return false;
        return true;
      },
      sectionInputsArr: [
        {
          inputTitle: "What location should the screen be shipped to?",
          inputType: "location",
          inputName: "screenPackageDeliveryLocation",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "text",
              optionName: "screenPackageDeliveryLocationCity",
              optionLabel: "",
              optionPlaceholder: "City",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "text",
              optionName: "screenPackageDeliveryLocationProvince",
              optionLabel: "",
              optionPlaceholder: "Province",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "What is your estimated budget for this project?",
          inputType: "number",
          inputName: "screenPackageBudget",
          inputLabel: "",
          inputPlaceholder: "$CAD",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "When do you need your screen system by?",
          inputType: "calendar",
          inputName: "screenPackageDeliveryDeadline",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "single",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Step 3',
      sectionSubTitle: 'Booking Information',
      shouldRenderFn: () => {
        if (watch('rentOrBuySelection') !== 'Rent') return false;
        return true;
      },
      sectionInputsArr: [
        {
          inputTitle: "How many events are you interested in booking?",
          inputType: "multi-date",
          inputName: "numberOfBookings",
          inputLabel: "",
          inputPlaceholder: "1, 2, 3, etc..",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
            validate: (inputValue) => {
              if (inputValue > 20) setValue('numberOfBookings', 20);
            }
          },
          inputOptions: [
            {
              optionTitle: "Select the dates you are interested in:",
              optionType: "date",
              optionName: "desiredEventDates",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "What type of event are you planning?",
          inputType: "radio",
          inputName: "eventType",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "eventType",
              optionLabel: "Fresh Air",
              optionPlaceholder: "",
              optionValue: "Open Air",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "eventType",
              optionLabel: "Drive-In",
              optionPlaceholder: "",
              optionValue: "Drive-In",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "eventType",
              optionLabel: "Indoor",
              optionPlaceholder: "",
              optionValue: "Indoor",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "What type of presentation will be played at your event?",
          inputType: "radio",
          inputName: "presentationType",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "presentationType",
              optionLabel: "Movie",
              optionPlaceholder: "",
              optionValue: "Movie",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "presentationType",
              optionLabel: "Livestream",
              optionPlaceholder: "",
              optionValue: "Livestream",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "presentationType",
              optionLabel: "Camera Feed",
              optionPlaceholder: "",
              optionValue: "Camera Feed",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "presentationType",
              optionLabel: "Other",
              optionPlaceholder: "",
              optionValue: "Other",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Will the event be public or private?",
          inputType: "radio",
          inputName: "audienceType",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "audienceType",
              optionLabel: "Public",
              optionPlaceholder: "",
              optionValue: "Public",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "audienceType",
              optionLabel: "Private",
              optionPlaceholder: "",
              optionValue: "Private",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Step 3',
      sectionSubTitle: 'Screen Package Information',
      shouldRenderFn: () => {
        if (watch('rentOrBuySelection') !== 'Buy') return false;
        return true;
      },
      sectionInputsArr: [
        {
          inputTitle: "Do you need to include audio equipment in your screen package?",
          inputType: "radio",
          inputName: "screenPackageAudioEquipment",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageAudioEquipment",
              optionLabel: "Yes",
              optionPlaceholder: "",
              optionValue: "Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageAudioEquipment",
              optionLabel: "No",
              optionPlaceholder: "",
              optionValue: "Not Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Do you need to include FM equipment for drive-in style events in your screen package?",
          inputType: "radio",
          inputName: "screenPackageFMEquipment",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageFMEquipment",
              optionLabel: "Yes",
              optionPlaceholder: "",
              optionValue: "Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageFMEquipment",
              optionLabel: "No",
              optionPlaceholder: "",
              optionValue: "Not Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Do you need to include a generator in your screen package?",
          inputType: "radio",
          inputName: "screenPackageGenerator",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageGenerator",
              optionLabel: "Yes",
              optionPlaceholder: "",
              optionValue: "Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageGenerator",
              optionLabel: "No",
              optionPlaceholder: "",
              optionValue: "Not Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "",
          inputType: "",
          inputName: "",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "",
              optionName: "",
              optionLabel: "",
              optionPlaceholder: "",
              optionValue: "",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
        {
          inputTitle: "Do you need us to provide in-person training to operate your screen system?",
          inputType: "radio",
          inputName: "screenPackageTraining",
          inputLabel: "",
          inputPlaceholder: "",
          inputValue: "",
          inputCalendarMode: "",
          inputCalendarStartDate: "",
          inputCalendarDisabledBeforeDate: "",
          inputCalendarEndDate: "",
          inputRegisterObj: {
            required: { value: true, message: "Field Required" },
          },
          inputOptions: [
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageTraining",
              optionLabel: "Yes",
              optionPlaceholder: "",
              optionValue: "Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
            {
              optionTitle: "",
              optionType: "radio",
              optionName: "screenPackageTraining",
              optionLabel: "No",
              optionPlaceholder: "",
              optionValue: "Not Included",
              optionCalendarMode: "",
              optionCalendarStartDate: "",
              optionCalendarDisabledBeforeDate: "",
              optionCalendarEndDate: "",
              optionRegisterObj: {
                required: { value: true, message: "Field Required" },
              },
            },
          ],
        },
      ],
    },

  ];
};