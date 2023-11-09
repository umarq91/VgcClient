import wisalgardenintrovideo from "@/public/projects/wisalgarden.mp4"
import wisalgardebnschedule from '@/public/projects/wgimage.jpeg'
import visionscedule from "@/public/projects/vision-enlaveschedule.jpeg"
import visionschedule2 from "@/public/projects/schedule2.jpeg"
import orchardSquare from "@/public/projects/orchardSquare.jpg"
    const projectsData = [
        {
        name:"wisal-garden",
        title: "Wisal Garden",
        openingvideo:wisalgardenintrovideo,
        locationdescription:"Project Wisal Garden is located at ideal and prime location in thecity. Residents get the liberty of quick and easy access tovarious locations ",
        location:"https://www.google.com/maps/dir//3PC7%2B5C6+Wisal+Gardens,+Peshawar,+Khyber+Pakhtunkhwa+25000/@34.0301642,71.461499,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38d93b9eed3069f7:0x800cbd8e81615354!2m2!1d71.7135111!2d34.0703789?entry=ttu",
        schedule:wisalgardebnschedule,
        info:{
            locality:"Near jabba daud zai Peshawar motor way service road peshawar",
            city:"Peshawar",
            type:"Commericial and Residential",
            developer:"Vision Group of Companies",
            paymentplan:"3 years Installment plan ",
            paymentmodes:"Bank transfer,cheque"
        }

    },
    {
        "name":"vision-enclave",
        "locationdescription":"Project Vision enclave is located at ideal and prime location in thecity. Residents get the liberty of quick and easy access tovarious locations ",
        "location":"https://www.google.com/maps/dir//34.023915,71.447572/@34.023915,71.447572,17z?entry=ttu",
        "schedule":visionscedule,
        "schedule2":visionschedule2

    },
    {
        name:"vision-orchard-square",
        title:"Vision Orchard Square",
        locationdescription:"Project Wisal Garden is located at ideal and prime location in thecity. Residents get the liberty of quick and easy access tovarious locations",
        location:"https://www.google.com/maps/dir//34.051685,71.528664/@34.051685,71.528664,17z?entry=ttu",
        schedule:orchardSquare,
        info:{
             locality:"Budhi pull fakeer kaly road darmangi warsak road peshawar",
            city:"Peshawar",
            type:"Commericial and Residential",
            developer:"Vision Group of Companies",
            paymentplan:"3 years Installment plan ",
            paymentmodes:"Bank transfer,cheque"

        }

    }

]
export default projectsData;