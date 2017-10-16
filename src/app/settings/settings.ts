export class Settings {
    logo: string;
    slogan: string;
    contactEmail: string;
    theme: { name:string, options: { name:string; label:string; value:string}[] } = {name:"", options:[]};
}