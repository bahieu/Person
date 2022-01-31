function Person(name, age, gender, cccd) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.cccd = cccd;
}
Person.prototype.getInfo = function () {
    console.log(
        "Name: " +this.name + "<br/>" +
        "Age:" +   this.age + "<br/>" +
        "gender: " + this.gender
    );
};
Person.prototype.drinkWater = function () {
    console.log("Đang uống nước");
};

function Staff(salary) {
    this.salary = salary;
}

function Student(mssv) {    
    this.mssv = mssv;
}

function MemberOfFamily(nickName) {   
    this.nickName = nickName;
}

var name1 = prompt("Enter Your Name: ");
var age = Number(prompt("Enter Your Age: "));
var gender = prompt("Enter Your Gender: ");
var cccd = prompt("Enter Your CCCD: ");
var salary = Number(prompt("Enter Your Salary: "));
var mssv = prompt("Enter Your MSSV: ");
var nickName = prompt("Enter Your Nick Name: ");

Staff.prototype = new Person(name1, age, gender, cccd);
MemberOfFamily.prototype = new Person(name1, age, gender, cccd);
Student.prototype = new Person(name1, age, gender, cccd);
var staff1 = new Staff(salary);
var member1 = new MemberOfFamily(nickName);
var student1 = new Student(mssv);
Staff.prototype.bungCF = function () {
    console.log("Đang bưng cà phê");
};
Staff.prototype.lauBan = function () {
    console.log("Đang lau bàn");
};
Staff.prototype.donBan = function () {
    console.log("Đang dọn bàn");
};

Student.prototype.lamBaiKiemTra = function () {
    console.log("Đang làm bài kiểm tra");
};
Student.prototype.hocBai = function () {
    console.log("Đang học bài");
};

MemberOfFamily.prototype.xemTV = function () {
    console.log("Đang xem tivi");
};
MemberOfFamily.prototype.nauAn = function () {
    console.log("Đang nấu ăn");
};
staff1.getInfo();
staff1.bungCF();
staff1.drinkWater();
member1.getInfo();
member1.nauAn();
student1.getInfo();
student1.lamBaiKiemTra();
