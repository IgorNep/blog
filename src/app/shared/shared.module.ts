import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule, QuillModule.forRoot()],
  exports: [HttpClientModule, QuillModule],
})
export class SharedModule {}
