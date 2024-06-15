function resetForm() {
    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('topicInput').value = '';
    document.getElementById('gvInput').value = '';
    document.getElementById('dateInput').value = '';

}
function deleteCourse(button) {
    var id = button.getAttribute("data");
    console.log('Course: ' + id)
    console.log(button)
    Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa khóa học  này?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3b71ca',
        cancelButtonColor: '#dc4c64',
        confirmButtonText: 'OK',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/course-api/deleteByIdCourse/${id}`)
                .then(response => {
                    if (response.data.success) {
                        Swal.fire(
                            'Đã xóa!',
                            'Khóa học đã được xóa.',
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    } else {
                        Swal.fire(
                            'Lỗi!',
                            'Không thể xóa khóa học.',
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
function postCourse() {
    let Id = document.getElementById('idInput').value;
    let name = document.getElementById('nameInput').value;
    let image = document.getElementById('imageInput').value;
    let topic =document.getElementById('topicInput').value ;
    let gv = document.getElementById('gvInput').value;
    let date =  document.getElementById('dateInput').value ;

    let insertCourse = {}
    if (Id) {
        insertCourse = {
            courseId: Id,
            courseName: name,
            courseImage: image,
            topic:topic,
            instructor: gv,
            creationDate:date
        };
    } else {
        insertCourse = {
            courseName: name,
            courseImage: image,
            topic:topic,
            instructor: gv,
            creationDate:date
        };
    }
    console.table(insertCourse)
    axios.post('/course-api/postCourse', insertCourse)
        .then(response => {
            if (!document.getElementById('idInput').value) {
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thêm khóa học thành công',
                        text: 'Thông tin khóa học đã được thêm thành công.',
                        timer: 1500
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thêm khóa học thất bại',
                        text: 'Đã xảy ra lỗi khi thêm thông tin khóa học. Vui lòng thử lại sau.',
                    });
                }
            } else {
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cập nhật thông tin thành công',
                        text: 'Thông tin khóa học đã cập nhật thành công.',
                    }).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Cập nhật thông tin thất bại',
                        text: 'Đã xảy ra lỗi khi cập nhật thông tin khóa học. Vui lòng thử lại sau.',
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
function updateCourse(button) {
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

    let course = {
        id: data[0],
        name: data[1],
        image: data[2],
        userId:data[3],
        topic: data[4],

        date:data[5]

    }
    fillDataToForm(course)
}

fillDataToForm = (course) => {
    console.log(course.id)


    document.getElementById('idInput').value = course.id;
    document.getElementById('idInput').focus();
    document.getElementById('nameInput').value = course.name;
    document.getElementById('nameInput').focus();
    document.getElementById('imageInput').value = course.image;
    document.getElementById('imageInput').focus();
    document.getElementById('topicInput').value= course.topic;
    document.getElementById('topicInput').focus();
    document.getElementById('gvInput').value=course.userId;
    document.getElementById('gvInput').focus();
    document.getElementById('dateInput').value=course.date;
    document.getElementById('dateInput').focus();

}