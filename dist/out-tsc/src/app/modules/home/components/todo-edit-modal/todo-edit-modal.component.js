// import { Component, OnInit, EventEmitter } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { ToastrService } from 'ngx-toastr';
// import { NgOption } from '@ng-select/ng-select';
// import { TranslateService } from '@ngx-translate/core';
// import { Subject } from 'rxjs';
// import { Todo } from '../../../../shared/models/todo.model';
// import { UserService } from '../../../../core/services/user.service';
// import { TodoService } from '../../../../core/services/todo.service';
// @Component({
// 	selector: 'app-todo-edit-modal',
// 	templateUrl: './todo-edit-modal.component.html',
// 	styleUrls: ['./todo-edit-modal.component.scss']
// })
// export class TodoEditModalComponent implements OnInit {
// 	public event: EventEmitter<any> = new EventEmitter();
// 	public onClose: Subject<boolean>;
// 	editTodoForm: FormGroup;
// 	todo: Todo;
// 	minDate: Date;
// 	isFormSubmitted = false;
// 	isTodoPageLoaded = false;
// 	users = [];
// 	assignMembers = [];
// 	datepickerConfig = {
// 		dateInputFormat: 'YYYY-MM-DD',
// 		containerClass: 'theme-red'
// 	}
// 	constructor(
// 		public translate: TranslateService,
// 		public bsModalRef: BsModalRef,
// 		private formBuilder: FormBuilder,
// 		private toastr: ToastrService,
// 		private userService: UserService,
// 		private todoService: TodoService
// 	) { }
// 	ngOnInit() {
// 		this.onClose = new Subject();
// 		this.minDate = new Date();
// 		this.getUsers();
// 		this.loadForms();
// 	}
// 	loadForms() {
// 		for (let iRow in this.todo.assigned) {
// 			this.assignMembers.push(this.todo.assigned[iRow].id)
// 		}
// 		this.editTodoForm = this.formBuilder.group({
// 			id: [this.todo.id],
// 			title: [this.todo.title, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
// 			assigned: [this.assignMembers, Validators.required],
// 			status: [this.todo.status, Validators.required],
// 			due_date: [new Date(this.todo.due_date), Validators.required],
// 		});
// 	}
// 	get todoControl() { return this.editTodoForm.controls; }
// 	getUsers() {
// 		this.userService.getAll()
// 			.subscribe(
// 				data => {
// 					this.users = data;
// 					this.isTodoPageLoaded = true;
// 				});
// 	}
// 	onSubmit() {
// 		this.isFormSubmitted = true;
// 		if (this.editTodoForm.invalid) {
// 			return;
// 		}
// 		this.todoService.update(this.editTodoForm.value)
// 			.subscribe(
// 				data => {
// 					this.toastr.success(this.translate.instant('todos.messages.update'), this.translate.instant('todos.title'));
// 					this.event.emit({ data: true });
// 					this.onCancel();
// 				});
// 	}
// 	onCancel() {
// 		this.onClose.next(false);
// 		this.bsModalRef.hide();
// 	}
// }
//# sourceMappingURL=todo-edit-modal.component.js.map