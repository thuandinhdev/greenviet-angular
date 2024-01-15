import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
var FileBrowserService = /** @class */ (function () {
    function FileBrowserService(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl;
    }
    FileBrowserService.prototype.getFolders = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser", { params: reqObj });
    };
    FileBrowserService.prototype.createFolder = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/file-browser", reqObj, options);
    };
    FileBrowserService.prototype.getById = function (current_folder_id) {
        return this.http.get(this.apiUrl + "/api/file-browser/" + current_folder_id);
    };
    FileBrowserService.prototype.updateFolder = function (folder) {
        return this.http.put(this.apiUrl + "/api/file-browser/" + folder.id, folder);
    };
    FileBrowserService.prototype.deleteFolder = function (id) {
        return this.http.delete(this.apiUrl + "/api/file-browser/" + id);
    };
    FileBrowserService.prototype.getFolderBreadcrumb = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser/breadcrumb", { params: reqObj });
    };
    FileBrowserService.prototype.getFiles = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/files", { params: reqObj });
    };
    FileBrowserService.prototype.updateFile = function (file) {
        return this.http.put(this.apiUrl + "/api/files/" + file.id, file);
    };
    FileBrowserService.prototype.deleteFile = function (id) {
        return this.http.delete(this.apiUrl + "/api/files/" + id);
    };
    FileBrowserService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/files/attachment/remove", dataObj);
    };
    FileBrowserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], FileBrowserService);
    return FileBrowserService;
}());
export { FileBrowserService };
//# sourceMappingURL=file-browser.service.js.map