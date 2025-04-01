const fs = require("fs");

const filePath1 = "copy.txt";
const data1 = "Hello, world!";
const filePath2 = "source.txt";

// write in the first file
fs.writeFile(filePath1, data1, (err) => {
  if (err) {
    console.error("Ошибка при записи первого файла:", err);
  } else {
    console.log("Первый файл успешно записан!");

    // read data from first file
    fs.readFile(filePath1, "utf8", (err, data2) => {
      if (err) {
        console.error("Ошибка при чтении первого файла:", err);
      } else {
        // write from first file to second
        fs.writeFile(filePath2, data2, (err) => {
          if (err) {
            console.error("Ошибка при записи второго файла:", err);
          } else {
            console.log("Второй файл успешно записан с данными из первого!");
          }
        });
      }
    });
  }
  fs.unlink(filePath1, data1, (err) => {
    if (err) {
      console.log("Ошибка при удалении!");
    } else {
      console.log("Все окей!");
    }
  });
});
