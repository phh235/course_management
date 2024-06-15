function resetForm() {    document.getElementById('usernameInput').value = '';    document.getElementById('passwordInput').value = '';    document.getElementById('fullNameInput').value = '';    document.getElementById('emailInput').value = '';    document.getElementById('birthdayInput').value = '';    document.getElementById('phoneNumberInput').value = '';    let genderRadios = document.getElementsByName('inlineRadioOptions');    for (let i = 0; i < genderRadios.length; i++) {        genderRadios[i].checked = false;    }}function deleteUser(button) {    var userId = button.getAttribute("data");    console.log('User: ' + userId)    console.log(button)    Swal.fire({        title: 'Bạn có chắc chắn xóa không?',        text: 'Bạn sẽ không thể hoàn tác',        icon: 'warning',        showCancelButton: true,        confirmButtonColor: '#139c49',        cancelButtonColor: '#dc4c64',        confirmButtonText: 'Xóa',        cancelButtonText: 'Hủy'    }).then((result) => {        if (result.isConfirmed) {            axios.delete(`/user-api/deleteUserById/${userId}`)                .then(response => {                    if (response.data.success) {                        Swal.fire({                            icon: 'success',                            title: 'Thành công',                            text: 'Đã xóa người dùng.',                            timer: 2000                        }).then(() => {                            location.reload();                        });                    } else {                        Swal.fire(                            'Lỗi!',                            'Không thể xóa người dùng.',                            'error'                        );                    }                })                .catch(error => {                    Swal.fire(                        'Lỗi!',                        'Đã xảy ra lỗi.',                        'error'                    );                });        }    });}function postUserInfo() {    let userId = document.getElementById('userIdInput').value;    let username = document.getElementById('usernameInput').value;    let password = document.getElementById('passwordInput').value;    let fullName = document.getElementById('fullNameInput').value;    let email = document.getElementById('emailInput').value;    // Kiểm tra xem có phần tử radio nào được chọn chưa    let genderInput = document.querySelector('input[name="inlineRadioOptions"]:checked');    console.log(genderInput)    let gender = genderInput ? genderInput.value === "true" : null;    let birthday = document.getElementById('birthdayInput').value;    let phoneNumber = document.getElementById('phoneNumberInput').value;    let insertUser = {}    if (userId) {        insertUser = {            userId: userId,            username: username,            password: password,            fullName: fullName,            email: email,            gender: gender,            birthday: birthday,            phoneNumber: phoneNumber        };    } else {        insertUser = {            username: username,            password: password,            fullName: fullName,            email: email,            gender: gender,            birthday: birthday,            phoneNumber: phoneNumber        };    }    console.table(insertUser)    axios.post('/user-api/postSaveUser', insertUser)        .then(response => {            uploadFile()            if (!document.getElementById('userIdInput').value) {                if (response.data.success) {                    Swal.fire({                        icon: 'success',                        title: 'Thành công',                        text: 'Đã thêm người dùng.',                        timer: 2000                    }).then(() => {                        location.reload();                    });                } else {                    Swal.fire({                        icon: 'error',                        title: 'Thất bại',                        text: 'Đã xảy ra lỗi khi thêm thông tin người dùng. Vui lòng thử lại sau.',                    });                }            } else {                if (response.data.success) {                    Swal.fire({                        icon: 'success',                        title: 'Thành công',                        text: 'Đã cập nhật thông tin người dùng.',                        timer: 2000                    }).then(() => {                        location.reload();                    });                } else {                    Swal.fire({                        icon: 'error',                        title: 'Cập nhật thông tin thất bại',                        text: 'Đã xảy ra lỗi khi cập nhật thông tin người dùng. Vui lòng thử lại sau.',                    });                }            }        })        .catch(error => {            console.error('Error:', error);            Swal.fire({                icon: 'error',                title: 'Lỗi',                text: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.',            });        });}function updateUserInfo(button) {    document.getElementById('ex1-tab-1').classList.toggle('active')    document.getElementById('ex1-tab-1').classList.toggle('ripple-surface-primary')    document.getElementById('ex1-tabs-1').classList.toggle('active')    document.getElementById('ex1-tabs-1').classList.toggle('show')    document.getElementById('ex1-tab-2').classList.toggle('active')    document.getElementById('ex1-tab-2').classList.toggle('ripple-surface-primary')    document.getElementById('ex1-tabs-2').classList.toggle('active')    document.getElementById('ex1-tabs-2').classList.toggle('show')    let tds = button.parentElement.parentElement.getElementsByTagName('td')    // let data = Array.from(tds).map((td) => td.textContent)    let data = Array.from(tds).map((td) => {        if (td.id === 'img-avatar') {            let img = td.querySelector('img');            return img ? img.src : '';        } else {            return td.textContent;        }    });    // console.table(data)    let account = {        userId: data[0],        username: data[1],        password: data[2],        fullName: data[3],        email: data[4],        gender: data[5] === 'Nam',        birthday: data[6],        phoneNumber: data[7],        avatar: data[8]    }    fillDataToForm(account)}fillDataToForm = (account) => {    console.log(account.userId)    console.log(account.gender)    document.getElementById('userIdInput').value = account.userId;    document.getElementById('userIdInput').focus();    document.getElementById('usernameInput').value = account.username;    document.getElementById('usernameInput').focus();    document.getElementById('passwordInput').value = account.password;    document.getElementById('passwordInput').focus();    document.getElementById('fullNameInput').value = account.fullName;    document.getElementById('fullNameInput').focus();    document.getElementById('emailInput').value = account.email;    document.getElementById('emailInput').focus();    account.gender ?        document.getElementById('inlineRadio1').toggleAttribute('checked') :        document.getElementById('inlineRadio2').toggleAttribute('checked')    document.getElementById('birthdayInput').value = account.birthday;    document.getElementById('birthdayInput').focus();    document.getElementById('phoneNumberInput').value = account.phoneNumber;    document.getElementById('phoneNumberInput').focus();    document.getElementById('imagePreview').src = account.avatar;}function uploadFile() {    const fileInput = document.getElementById('fileInput');    const file = fileInput.files[0];    console.log(file)    const formData = new FormData();    formData.append('file', file);    axios.post('/uploadFile', formData, {        headers: {            'Content-Type': 'multipart/form-data'        }    })        .then(response => {            console.log(response.data);        })        .catch(error => {            console.error('There was an error!', error);        });}