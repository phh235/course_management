function resetForm() {
    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('motaInput').value = '';
}

function deleteTopic(button) {
    var id = button.getAttribute("data");
    console.log('Topic: ' + id)
    Swal.fire({
        title: 'Bạn có chắc chắn xóa không?',
        text: 'Bạn sẽ không thể hoàn tác',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#139c49',
        cancelButtonColor: '#dc4c64',
        confirmButtonText: 'Có, xóa nó',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/topic-api/deleteByIdTopic/${id}`)
                .then(response => {
                    if (response.data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thành công',
                            text: 'Đã xóa chuyên đề.',
                            timer: 2000,
                            confirmButtonColor: '#3b71ca'
                        }).then(() => {
                            location.reload();
                        })
                    } else {
                        Swal.fire(
                            'Lỗi!',
                            'Không thể xóa chuyên đề.',
                            'error'
                        );
                    }
                })
                .catch(error => {
                    Swal.fire(
                        'Lỗi!',
                        'Đã xảy ra lỗi.',
                        'error'
                    );
                });
        }
    });
}

function postTopic() {
    let id = document.getElementById('idInput').value;
    let name = document.getElementById('nameInput').value;
    let image = document.getElementById('fileInput').value.split('\\')[2];
    let description = document.getElementById('motaInput').value;

    let insertTopic = {}
    if (id) {
        insertTopic = {
            id: id,
            name: name,
            image: image,
            description: description
        };
    } else {
        insertTopic = {
            name: name,
            image: image,
            description: description
        };
    }
    console.table(insertTopic)
    axios.post('/topic-api/postTopic', insertTopic)
        .then(response => {
            if (!document.getElementById('idInput').value) {
                if (response.data.success) {
                    uploadFile();
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công',
                        text: 'Đã thêm chuyên đề.',
                        timer: 2000,
                        confirmButtonColor: '#3b71ca'
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thêm chuyên đề thất bại!',
                        text: 'Đã xảy ra lỗi khi thêm thông tin chuyên đề. Vui lòng thử lại sau.',
                        confirmButtonColor: '#3b71ca'
                    });
                }
            } else {
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công',
                        text: 'Đã cập nhật chuyên đề.',
                        timer: 2000,
                        confirmButtonColor: '#3b71ca'
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Cập nhật thông tin thất bại',
                        text: 'Đã xảy ra lỗi khi cập nhật thông tin chuyên đề. Vui lòng thử lại sau.',
                        confirmButtonColor: '#3b71ca'
                    });
                }
            }

        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.',
                confirmButtonColor: '#3b71ca'
            });
        });
}

function updateTopic(button) {
    document.getElementById('ex1-tab-1').classList.toggle('active')
    document.getElementById('ex1-tab-1').classList.toggle('ripple-surface-primary')
    document.getElementById('ex1-tabs-1').classList.toggle('active')
    document.getElementById('ex1-tabs-1').classList.toggle('show')
    document.getElementById('ex1-tab-2').classList.toggle('active')
    document.getElementById('ex1-tab-2').classList.toggle('ripple-surface-primary')
    document.getElementById('ex1-tabs-2').classList.toggle('active')
    document.getElementById('ex1-tabs-2').classList.toggle('show')

    let tds = button.parentElement.parentElement.getElementsByTagName('td')
    let data = Array.from(tds).map((td) => {
        if (td.id === 'img-avatar') {
            let img = td.querySelector('img');
            return img ? img.src : '';
        } else {
            return td.textContent;
        }
    });

    let topic = {
        id: data[0],
        name: data[1],
        image: data[2],
        description: data[3]
    }
    fillDataToForm(topic)
}

fillDataToForm = (topic) => {
    console.log(topic.id)

    document.getElementById('idInput').value = topic.id;
    document.getElementById('idInput').focus();
    document.getElementById('nameInput').value = topic.name;
    document.getElementById('nameInput').focus();
    document.getElementById('imagePreview').src = topic.image;
    document.getElementById('motaInput').value = topic.description;
    document.getElementById('motaInput').focus();
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    console.log(file)

    const formData = new FormData();
    formData.append('file', file);

    axios.post('/uploadFile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}