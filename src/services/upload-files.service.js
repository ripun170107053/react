import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("https://glacial-brook-60163.herokuapp.com/excel/uploadExcel", formData, {
      headers: {
        "mode":"no-cors",
        "Content-Type": "multipart/form-data",
        "header": {"Access-Control-Allow-Origin": '*'},
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
  
}

export default new UploadFilesService();
