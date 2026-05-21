class FileStorage {
  save(data) {
    console.log(data);
  }
}

const store =
  new FileStorage();

store.save("File");