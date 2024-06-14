function resetForm() {
    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('motaInput').value = '';

}
function postTopic() {
    let Id = document.getElementById('idInput').value;
    let name = document.getElementById('nameInput').value;
    let image = document.getElementById('imageInput').value;
    let description =  document.getElementById('motaInput').value;

    let insertTopic = {}
    if (Id) {
        insertTopic = {
            id: Id,
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
                    Swal.fire({
                        icon: 'success',
                        title: 'Thêm chuyên đề thành công',
                        text: 'Thông tin chuyên đề đã được thêm thành công.',
                        timer: 1500
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thêm chuyên đề thất bại',
                        text: 'Đã xảy ra lỗi khi thêm thông tin chuyên đề. Vui lòng thử lại sau.',
                    });
                }
            } else {
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cập nhật thông tin thành công',
                        text: 'Thông tin chuyên đề đã cập nhật thành công.',
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Cập nhật thông tin thất bại',
                        text: 'Đã xảy ra lỗi khi cập nhật thông tin chuyên đề. Vui lòng thử lại sau.',
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
            });
        });
}

function deleteTopic(button) {
    var id = button.getAttribute("data");
    console.log('Topic: ' + id)
    console.log(button)
    Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa người dùng này?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3b71ca',
        cancelButtonColor: '#dc4c64',
        confirmButtonText: 'OK',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/topic-api/deleteByIdTopic/${id}`)
                .then(response => {
                    if (response.data.success) {
                        Swal.fire(
                            'Đã xóa!',
                            'Chuyên đề đã được xóa.',
                            'success'
                        ).then(() => {
                            location.reload();
                        });
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
    let data = Array.from(tds).map((td) => td.textContent)
    // console.table(data)

    let topic = {
        id: data[0],
        name: data[1],
        image: data[2],
        description: data[3],

    }
    fillDataToForm(topic)
}


fillDataToForm = (topic) => {
    console.log(topic.id)


    document.getElementById('idInput').value = topic.id;
    document.getElementById('idInput').focus();
    document.getElementById('nameInput').value = topic.name;
    document.getElementById('nameInput').focus();
    document.getElementById('imageInput').value = topic.image;
    document.getElementById('imageInput').focus();
    document.getElementById('motaInput').value = topic.description;
    document.getElementById('motaInput').focus();

}