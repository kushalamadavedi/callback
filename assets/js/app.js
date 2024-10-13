var cl = console.log;


const hrCall = (skill) => {
    setTimeout(() => {
        let success = (skill.toLowerCase().includes('angular'))

        if(success){
            cl('A Candidate is shortlisted for Angular Profile')
            firsttechInt();
        }else{
            cl('Looking for a Angular Candidate')
        }
    },3000)
}

const firsttechInt = () => {
   setTimeout(() => {
    let error = Math.random() >= .5 ? false : true

    if(!error){
        cl('A Candidate is shortlisted for 2nd Round')
        secondtechInt();
    }else{
        cl('The Candidate is not good in Basics')
    }
   },2500)
}

const secondtechInt = () => {
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true

        if(!error){
            cl('A Candidate is shortlisted for the MI Round')
            MIRound();
        }else{
            cl('The Candidate is struglling to write the code')
        }       

    },2000)
}

const MIRound = () => {
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true

        if(!error){
            cl('Candidate is selected for a given profile')
            hrCallForSalary ();
        }else{
            cl('The Candidate is not able to explain his/her previous project')
        }
    },1500)
}

const hrCallForSalary = () => {
    cl('Congrats your selected for given profile')
}


hrCall('Angular 14')










