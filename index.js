class Student {
  constructor(name, surname, birthYear, marksArray) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marksArray = marksArray;
    this.year = 2023;
    this.attendanceArray = new Array(25);
    this.currentIndex = 0;
    this.averageMark;
  }

  getAge() {
    this.year - this.birthYear;
  }

  getAverageMark() {
    this.averageMark =
      this.marksArray.reduce((sum, cur) => sum + cur, 0) /
      this.marksArray.length;
  }

  present() {
    if (this.currentIndex < this.attendanceArray.length) {
      this.attendanceArray[this.currentIndex++] = true;
    } else {
      console.log("Attendance array is full!");
    }
  }

  absent() {
    if (this.currentIndex < this.attendanceArray.length) {
      this.attendanceArray[this.currentIndex++] = false;
    } else {
      console.log("Attendance array is full!");
    }
  }

  summary() {
    this.averageAttendance =
      this.attendanceArray.filter((el) => el === true).length /
      this.attendanceArray.length;
    if (this.averageMark > 90 && this.averageAttendance > 0.9) {
      console.log("Excellent!");
    } else if (this.averageMark > 90 || this.averageAttendance > 0.9) {
      console.log("Good, but you can do better!");
    } else {
      console.log("That's really bad attendance!");
    }
  }
}

const dan = new Student("Bohdan", "Dmytrenko", 1996, [100, 60, 82]);
dan.present();
dan.present();
dan.absent();
dan.absent();
dan.absent();
dan.present();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.getAverageMark();

dan.summary();

console.log(dan);

const vlad = new Student(
  "Vladislav",
  "Shevchenko",
  1996,
  [100, 60, 82, 90, 90, 90, 90, 100, 100, 100, 100, 100, 100, 100]
);
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();

vlad.getAverageMark();

vlad.summary();

console.log(vlad);
