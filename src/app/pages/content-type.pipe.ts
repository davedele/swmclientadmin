import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name:'ContentType'
})
export class ContentTypePipe implements PipeTransform {
	transform(value, name ){
		console.log("ContentTypePipeTransform", value, name );
		return value.filter((content)=>{ return content.pageContentArea === name; });
	}
}