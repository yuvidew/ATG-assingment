const postDataList = [
    {
        image : 'https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aq79hyrRCea1e2ZOkWrEMy67Pz6ayLDsmkJMm~r40f-8R3T8prtqoxD-SDk8ttaFHBVcqOGpG1XO~w9ybR-RYy5ZmxpEGN6Ua7orma4lF5RfSnI5329D~aMXRtb5rtbF4XpU85sEdCSTjfhyvC3uaZCFypLFao0e6zrFPNeBW6hSB3mSU2IByO69CvASWUsraFmTQYsiONkOmlDPK-2TzvpRSAul-UuGSKzXQPHHksJYILvpqPvcHT2HH4UmmLW3FSKQOb5b670SG8cxs5bsa8drqsvNg65-56lsF~CLDmQfr6ohJvZ7mCE0Np55an8mTwoM76uTYEKjQjTFMfvISQ__',
        category : '✍️ Article',
        heading : 'What if famous brands had regular fonts? Meet RegulaBrands!' ,
        textData : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg : 'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbZd5nauPWWfdrUiU-wgLoDMl705LXOjEoffiLOQc370MyPwuGLASkj2O8E2RcepxB5RPuEqsj0bxad9GGjhJYI1vygK1dRC9WJZJICwlu8Mf3bGSOr2ENjlW3DQovGR2HFph5RqHlOmsJRXYZcJrdjDjqbFunx9lDa5f~W-qurt65cxO0PeFJ~nyXPMiofbx7r7DfsLdVF~T1m4WrqEPgKE6~imAKSSyiJXRYxuQFOpaqx1TzDDM58B6d2q0AB6YqGrRFucEepWl-25EPJU5CBcbHfs4JM4hDvm7tdcmNnSc0-LafjPeCZhiiZvD~1OJ5T7aAotmmcxQxzEF5zvqA__',
        userName : 'Sarthak Kamra',
    },
    {
        image : 'https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=maqd1QhoE15rgXjddfjjy7lMwvDP4XfzOw6WpE1WVm6DXRYwK-4nBNGQKnYs6krw3tV8cN-09Y~7ktUK6RhTcyvCXzYjVWy7ARdT--LzF1XiXP5q8jl9M979V9fzEAGF5QKTHzfgIbHGrZH1GwhN3QHLbgyZccQQOMfZATiMEA6y8luTgJr95sOsuR~aBj~uvuzKnfnWbsNS6UYnnpGM5KXYLnsOmupW3QdUtGnMyngFX8f5NRw2BWNFjS7D10GfJRXyYkRyr1crm6deSY4dqCo-j6n0cbgQHSzPRAfJn7wpmVitJ7c5jeiABVjyZln0otSdR~KOyIath9q7PntSHA__',
        category : '🔬️ Education',
        heading : 'Tax Benefits for Investment under National Pension Scheme launched by Government' ,
        textData : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg : 'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kwt35Gd~UF5X~f-3pSzhVMVAqGdviWrNKTZdo-ab~qXwwQiwQjO4ptU7JHwUOCStYSavr4KsL34n6ryYVTmSSxW-9qpg2UChqK~9p82pt~pyEgDYBYUbA8jUAB5Eywt6x3SKvh3vCldrZnVwYKOaYIxtJ7~TTvtUjeYRnhVWqhrOSKjnuRuj0wVUINjL7QyxKiY7QsDCA41enpfd7eDc4D1JVeJmxv3sCKkywbSbuTp33PXaRQKGskXDDgQkrXE9rfRNiwJ2Gmay5iSC3Hp-XUcpM~QRUa5H2Kd8bUNsK1ASK4F1IByEbutm2mAntESftEMocEO9hhgWuSjk3Wjl5A__',
        userName : 'Sarah West',
    },
    {
        image : 'https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gpr0kt8fiz8pUgxL8dhMiszOd9XdphGCLBk4uCPk003eDVLYSp-ePeljqa2~J8rVCuowZc~d0rRAqZAJAcKijtqWgBI-3tAITYMpKl6k4NJ0gfgLhckBR-k13JbwzA6pbhL3zf4VBYf0w~RkrPei7rly58aP1NRcSWbssn7MZ-1uifQsyblcVEuNqcfcpj1mqq10YnC9piWQYg2S2KIDy~qxtfjbI4G6baUVCb2caOi~AOfP2k2ndVsxeKv39FeHgrjp0VZAExDyoKDkCyt5Jxf~nOEzZqaP-ENqTxcBgoYPo~AtIb2iPGq1Cf6OPj6SgQuJygJo-AgO259ack3-Dg__',
        category : '🗓️ Meetup',
        heading : 'Finance & Investment Elite Social Mixer @Lujiazui' ,
        textData : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg : 'https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLinD5DN8p1wOJvGotdT1J2ykjlys8SNlXirZ1~YIj4calQFLs12H8sBBhWDrFKiFm6WCMnPcnmUx~eYa8wynalUFet3nbJa~EIPWjlYm222uGXCdfdZ4IbV7UiJmRBE2p8Fhd3Tx0S2Np6tPU-IN95RhdFCqHzCXg5hi5F~3UN5EurakevaIocGUBdyLYOO3gl2lZMmvvflhEqAnDeCz3Y7FDr~oEe9L2yBCpffrUYWHxmhbE9v85PIiDIrFB44MZvvRJroEqhUyyvMj6vbXJtNNmqLU0ls1yrPENlXYksHleM2~RwLK6VFSWUjU85i-ws6DrPQLMQG9vBm-5ewNQ__',
        userName : 'Ronal Jones',
        date : 'Fri, 12 Oct, 2018',
        localatin : "Ahmedabad, India",
        btnText : 'Visit Website',
        btnTextColor : "#E56135"

    },

    {
        category : '💼️ Job',
        heading : 'Software Developer' ,
        textData : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        userImg : 'https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X2TF4ek7OMkzyR86VZWWw1paiRQNarAL8BsUM0L7eqdltPcx6d6Ptc0B4ydN~JkPib0iXvgTXnEXNdRNSv5iuXIDjGNpEun-HGBYH-am4s~roh3PEWVH9zZ2KwNgpGutvptT3h2o7ldx2I28Scj0M~qnEqAZMtFy0Z~ADGfjUvuO65gnOcWHq7dxfiGkG59f7-gTOUauIJDsfKPJ6moBSeybwPLh~Ao-cLt1k-cPlzV8dSASxGDUuBq1zHtu1wcQ-~XTG-g5hdWhlnKFyK-Ej1kB2jZz6n1a05K~1AB3Ow2t73L6~JUwhD29r4-pO6nmuE3T3z4uBmgQZ0U8mMBlzg__',
        userName : 'Joseph Gray',
        date : 'Innovaccer Analytics Private Ltd.',
        localatin : "Noida, India",
        btnText : 'Apply on Timesjobs',
        btnTextColor : "#02B875"
    }
]

const GrupArr = [
    {
        img : 'https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=abUNgPzaUA3PevxdBKu1xImzwZ4VnCpcgsKSeXPr53YgSxpVYSHeEmnUQCiIUhKhmbJhgRS6RhV0Cds-Q~NuJij1RoBmY43iB0Y71ymXwt5CuKR1l2OTkMqwZRV5oT5fC6VM8RpPRQqwy~b4Idi3UQBBmI~q~tLvs5kWmW3CEByWqZUdwZKLtulTjJPRevlfpDI9JV9ruaPjqTuI5ZcsvP~MEKohmv2zY2LHua48vFHW2a7JF17Kddaqt-DTT6BsQPDkClUeQbabB-~f2gg9uqNuLSbNd6IovyW47pAy~u45odMwBEZbdcE7E2oPflVEI1loeck7Qi9EjVoOoYLZvw__',
        name : 'Leisure'
    },
    {
        img : 'https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIUk1TYWec9XoYki8TFiLK-3BVOmz8OSbs~yMfsVdDFnmUzO4jcIUCkHDbfFGqI4chynP8lO0Sw-fsPjbecsSrD~naOD93AvFoyRbVGWLnUScbiNdvBiKQNeeDC8zBJIu6xQiB7zyx9cVffxEoWNHuGcEi28WjgEUnvL-2W~PpKk9Da10OMdO1KM4bSjHOXq-sr9aiN5CIICVjbRY7vJxlcgnFsLyvvmpL9xOsJTNH7bSodVlUfkOSG2TmNUjcf7lOFQXz61RYIORI796eSFLcANJK5BZweVnrKPE7XFGzZ-4RUplSXXMTT0oZ4Lj~8A4oCY7AihZd-a5rghGKulhQ__',
        name : 'Activism',
    },
    {
        img : 'https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jO585~6oi0O~sA5h2C98DKA6bfo1F6XxyaW4x~cZEUV6O260fwfAhzCXLUvXBROIv7nuTMLOj0t8FaNn-hlrg6hsaTl2xMJ3XzhfgcBp1~LHC4SMc8uPDpmn85QdPoFbt791deOMI-GHrkvdUYMROHkBELWcVvUKb7uzGTxMVOXDtYXsHodi-XI0lIOmDr1-YKYdt4btvPM0AEQZF2ZpGS6UJinP0pmwwoeLygPGmDZEnXjsPUdirs1fo9MMkSJjVDcfJkHuPg2JAzup1S4Sw~R4XADhUoo82UmygjFQvuoHKCKIbGGlvxsJv929mrBeeHEKKQmHf-F3f-tfjn1dtg__',
        name : 'MBA',
    },
    {
        img : 'https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-9asbn9vWWC~xmQuze6yaOWSUwXyP34HKkSD5ewnPUHZHurZ5FIlyBkZ8cPOG-o4vCXoKZVs5jPTS52NnP7p0kTwrOC8xxuWsz8RoQvHEYiWaMTmHyqZ6CCNFYMRhl~jKdgxtUeNFhh3k5hOl0ohw2u6-41cPqVgdrtEbC8IWPMmDVM2tvL-kce2kLTQ7nqaapvAe-6VmCrlwcDVQoAl7gKGv9vA~SnqkaiqiNj-0rm0bw1XQhV53JAORG~jWjLE5fc-6q7Iq9UVyjfORY7vqqyNua4NsmuHvTXybYI3hsL7fx94rUdy7F4AnrqF2RraNF9S85M-8j8sZctzNNdug__',
        name : 'Philosophy',
    },
]

const thePostCont = document.querySelector('#thePostCont')

thePostCont.innerHTML = postDataList.map((ele , index) => (
    `<article>
    <div class="card w-100 mb-3" style="width: 18rem;">
        <img src="${ele.image}" class="${ele.image ?'card-img-top' : 'd-none'}" alt="..."/>
        <div class="card-body p-4">
            <p class="fs-3 mb-4">${ele.category}</p>
            <div class="d-flex align-items-center justify-content-between">
                <h2>${ele.heading}</h2>
                <div class="thePsidtuon">
                    <button class="btn btn-secondary border-0" style="background-color: #EDEEF0;" onclick = 'handleHideShow(${index})'>
                        <img class="morebtn" src="./more.png" alt=""/>
                    </button>
                    <div class="card theMenu d-none" id = "${index}" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border-0 fs-5">Edit</li>
                            <li class="list-group-item border-0 fs-5">Report</li>
                            <li class="list-group-item border-0 fs-5">Option 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="dec mt-3">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            <div class = "${ele.btnText ? 'text-center w-100 border rounded-3 d-flex align-items-center justify-content-center' : 'd-none'}" style = "height : 3rem">
                <p class = "fs-5 mt-3" style = "color : ${ele.btnTextColor}">${ele.btnText}</p>
            </div>
            <div class="d-flex align-items-center justify-content-between  theckjsb">
                <div class="userImgText d-flex align-items-center gap-2 h-100">
                    <img class="theImg rounded-circle" src="${ele.userImg}" alt=""/>
                    <h4 class="mt-2">${ele.userName}</h4>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-4 h-100">
                    <div class="d-flex align-items-center gap-2 h-100 ">
                        <span>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z" fill="#525252"/>
                            </svg>
                        </span>
                        <p class="mt-3 fs-5">1.4k views</p>
                    </div>
                    <button class="btn btn-primary border-0 p-3" style="background: #EDEEF0;">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_968)">
                            <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </article>`
)).join('')

const theMEnu = document.querySelectorAll('#thePostCont .theMenu')

const handleHideShow = (i) => {
    theMEnu.forEach(ele => {
        if (ele.id == i) {
            ele.classList.toggle('d-none');
            ele.classList.toggle('d-block', !ele.classList.contains('d-none'));
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const buttons = [document.getElementById('button1'), document.getElementById('button2')];

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
        button.classList.add('d-none');
        buttons[1 - index].classList.remove('d-none');
        buttons[1 - index].classList.add('d-flex');
        });
    });
});

const theContFollow = document.getElementById('theContFollow')

theContFollow.innerHTML = GrupArr.map((ele) => (
    `<div class = 'd-flex align-items-center justify-content-between mt-4'>
        <div class="d-flex align-items-center gap-4">
            <img src="${ele.img}" alt="" class="theImg rounded-circle" />
            <h3>${ele.name}</h3>
        </div>
        <button class = "btn btn-primary fs-4 border-0 theFolloBtn rounded-pill">Follow</button>
    </div>`
)).join('')


/**this is for change the type of input */

const passwordInp = document.getElementById('passwordInp') 

const handlePassInp = () => {
    passwordInp.type = ( passwordInp.type === 'password') ? 'text' : 'password'
}

/**this is for the toggle the login and sign up page  */

const articles = document.querySelectorAll('.articalCont  article')
const buttons = document.querySelectorAll('.thebtncont  h3')

buttons.forEach(btn => {
    btn.addEventListener('click' , () =>{
        articles.forEach(ele => {
            if(btn.id == ele.id){
                ele.classList.remove('d-none')
                btn.innerHTML = `Don’t have an account yet? <span style="color: #2F6CE5; cursor: pointer;">Create new for free!</span>`
                btn.id = "SignIn"
            }else{
                ele.classList.add('d-none')
                btn.id = "SignUp"
                btn.innerHTML = `Already have an account? <span style="color: #2F6CE5; cursor: pointer;">Sign UP</span>`
            }
        })
    })
})


/**this function for the show and show and hide the login form  */

const FormCont = document.querySelector('.theLoginCont')
const handleHideLogin = () => {
    FormCont.classList.add('d-flex')
    FormCont.classList.remove('d-none')
}

const handelShowLogin = () => {
    FormCont.classList.remove('d-flex')
    FormCont.classList.add('d-none')
}


/**this function for add the register the user data */
const theFirst = document.querySelector('.theFirst')
const theSecon = document.querySelector('.theSecon')
const LoginForm1 = document.getElementById('theForm1Login')
const LoginForm2 = document.getElementById('theForm2Login')

LoginForm1.addEventListener('submit' , (e) =>{e.preventDefault()
    theFirst.classList.add('d-none')
    theSecon.classList.remove('d-none')
    theSecon.classList.add('d-flex')
    handelShowLogin()
})

LoginForm2.addEventListener('submit' , (e) =>{e.preventDefault()
    theFirst.classList.add('d-none')
    theSecon.classList.remove('d-none')
    theSecon.classList.add('d-flex')
    handelShowLogin()
})

/**this function for change the button */

const theJoind = document.querySelector('.theJoind')

theJoind.addEventListener('click' , () =>{
    theJoind.innerText = theJoind.innerText == "Join Group" ? "Leave Group" : "Join Group"
})


/**this function for hide and show the sign in and sign up form  */

const SignInBtn = document.getElementById('SignInBtn')
const SignUpBtn = document.getElementById('SignUpBtn')

SignInBtn.addEventListener('click'  , () => {
    articles.forEach(ele => {
        if(ele.id == 'SignIn'){
            ele.classList.add('d-none')
        }else{
            ele.classList.remove('d-none')

        }
    })
})

SignUpBtn.addEventListener('click'  , () => {
    articles.forEach(ele => {
        if(ele.id == 'SignUp'){
            ele.classList.add('d-none')
        }else{
            ele.classList.remove('d-none')

        }
    })
})
