function myFunction() {    var input, filter, table, tr, td, i, j, txtValue;    input = document.getElementById("searchInput");    filter = input.value.toUpperCase();    table = document.getElementById("myTable");    tr = table.getElementsByTagName("tr");    // Lặp qua tất cả các hàng của bảng    for (i = 0; i < tr.length; i++) {        var found = false; // Biến để kiểm tra xem có từ khóa tìm kiếm không        // Lặp qua tất cả các cột (td) của hàng hiện tại        for (j = 0; j < tr[i].getElementsByTagName("td").length; j++) {            td = tr[i].getElementsByTagName("td")[j];            if (td) {                txtValue = td.textContent || td.innerText;                if (txtValue.toUpperCase().indexOf(filter) > -1) {                    found = true; // Đánh dấu là đã tìm thấy từ khóa tìm kiếm                    break; // Ngừng lặp nếu đã tìm thấy                }            }        }        // Hiển thị hoặc ẩn hàng dựa trên kết quả tìm kiếm        if (found) {            tr[i].style.display = ""; // Hiển thị hàng nếu tìm thấy từ khóa        } else {            // Ẩn chỉ các hàng trong phần tbody            if (tr[i].parentNode.tagName.toLowerCase() === 'tbody') {                tr[i].style.display = "none";            }        }    }}