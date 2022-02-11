function Person(pName, age, gender, cccd) {
    this.pName = pName;
    this.age = age;
    this.gender = gender;
    this.cccd = cccd;
}
// Setter, Getter
Person.prototype.setPName = function(pName){
    this.pName = pName;
}
Person.prototype.getPName = function(){
    return this.pName;
}
Person.prototype.setAge = function(age){
    this.age = age;
}
Person.prototype.getAge = function(){
    return this.age;
}
Person.prototype.setGender = function(gender){
    this.pName = gender;
}
Person.prototype.getGender = function(){
    return this.gender;
}
Person.prototype.setCCCD = function(cccd){
    this.cccd = cccd;
}
Person.prototype.getCCCD = function(){
    return this.cccd;
}

//Nhập giá trị
Person.prototype.inputInfo = function(){
    this.setPName(prompt('Nhập tên: '));
    this.setAge(prompt('Nhập tuổi: '));
    this.setGender(prompt('Nhập giới tính: '));
    this.setCCCD(prompt('Nhập CCCD: '));
}

//In thông tin
Person.prototype.getInfo = function () {
    console.log(` Thông tin: 
    - Name: ${this.getPName()}
    - Age: ${this.getAge()}
    - Gender: ${this.getGender()}
    - CCCD: ${this,this.getCCCD()}`)
};
Person.prototype.drinkWater = function () {
    console.log("Đang uống nước");
};

function Staff(salary) {
    this.salary = salary;
}
Staff.prototype = new Person();
Staff.prototype.setSalary = function(salary){
    this.salary = salary;
}
Staff.prototype.getSalary = function(){
    return salary;
}

Staff.prototype.bungCF = function () {
    console.log("Đang bưng cà phê");
};
Staff.prototype.lauBan = function () {
    console.log("Đang lau bàn");
};
Staff.prototype.donBan = function () {
    console.log("Đang dọn bàn");
};

function Student(mssv) {    
    this.mssv = mssv;
}

Student.prototype = new Person();
Student.prototype.setMSSV = function(mssv){
    this.mssv = mssv;
}
Student.prototype.getMSSV =function(){
    return this.mssv;
}

Student.prototype.lamBaiKiemTra = function () {
    console.log("Đang làm bài kiểm tra");
};
Student.prototype.hocBai = function () {
    console.log("Đang học bài");
};

function MemberOfFamily(nickName) {   
    this.nickName = nickName;
}

MemberOfFamily.prototype = new Person();
MemberOfFamily.prototype.setNickName = function(nickName){
    this.nickName = nickName;
}
MemberOfFamily.prototype.getNickName = function(){
    return this.nickName;
}

MemberOfFamily.prototype.xemTV = function () {
    console.log("Đang xem tivi");
};
MemberOfFamily.prototype.nauAn = function () {
    console.log("Đang nấu ăn");
};

var ps1 = new NhanVien();


