let saveFile = () => {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const fafname = document.getElementById('fafname');
    const momname = document.getElementById('momname');
    const email = document.getElementById('email');
    const date = document.getElementById('dob');
    const MobileNumber = document.getElementById('mon');
    const fMobileNumber = document.getElementById('fmon');
    const MMobileNumber = document.getElementById('mmon');
    const Gender = document.querySelector('input[name="Gender"]:checked');
    const CollegeName = document.getElementById('Cname');
    const Course = document.getElementById('co');
    const Address = document.getElementById('add');
    const City = document.getElementById('ci');
    const State = document.getElementById('st');
    const Pincode = document.getElementById('pin');
    const sem1s = document.getElementById('11s');
    const sem1c = document.getElementById('11c');
    const sem2s = document.getElementById('12s');
    const sem2c = document.getElementById('12c');
    const sem3s = document.getElementById('21s');
    const sem3c = document.getElementById('21c');
    const sem4s = document.getElementById('22s');
    const sem4c = document.getElementById('22c');

    if (!fname.value || !lname.value || !fafname.value || !momname.value || !email.value || !date.value || !MobileNumber.value || !fMobileNumber.value || !MMobileNumber.value || !Gender || !CollegeName.value || !Course.value || !Address.value || !City.value || !State.value || !Pincode.value) {
        alert("Please fill in all required fields.");
        return;
    }

    let data =
        '\r First Name: ' + fname.value + ' \r\n ' +
        'Last Name: ' + lname.value + ' \r\n ' +
        'Father Name: ' + fafname.value + ' \r\n ' +
        'Mother Name: ' + momname.value + ' \r\n ' +
        'Email ID: ' + email.value + ' \r\n ' +
        'Date-of-Birth: ' + date.value + ' \r\n ' +
        'Mobile Number: ' + MobileNumber.value + ' \r\n ' +
        'Father Mobile Number: ' + fMobileNumber.value + ' \r\n ' +
        'Mother Mobile Number: ' + MMobileNumber.value + ' \r\n ' +
        'Gender: ' + Gender.value + ' \r\n ' +
        'College Name: ' + CollegeName.value + ' \r\n ' +
        'Course: ' + Course.value + ' \r\n ' +
        'Address: ' + Address.value + ' \r\n ' +
        'City: ' + City.value + ' \r\n ' +
        'State: ' + State.value + ' \r\n ' +
        'Pincode: ' + Pincode.value + ' \r\n ' +
        '                           Student Grades             ' + ' \r\n\n ' +
        '               ' + '     Year' + '                 Sgpa' + '    Cgpa' + ' \r\n\n ' +
        '                  ' + 'Ist Year(1st sem)' + '      ' + sem1s.value + '     ' + sem1c.value + ' \r\n\n ' +
        '                  ' + 'Ist Year(2nd sem)' + '      ' + sem2s.value + '     ' + sem2c.value + ' \r\n\n ' +
        '                  ' + 'IInd Year(1st sem)' + '     ' + sem3s.value + '     ' + sem3c.value + ' \r\n\n ' +
        '                  ' + 'IInd Year(2nd sem)' + '     ' + sem4s.value + '     ' + sem4c.value + ' \r\n\n ';

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}
