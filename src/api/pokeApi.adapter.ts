import axios from "axios";


export interface httpAdapter{

    get<T>(url:string):Promise<T>;

}

export class PokeApiFetchAdapter implements httpAdapter{

    async get<T>(url: string):Promise<T>{
        const resp = await fetch(url);
        const data: T = await resp.json();

        console.log('Esto se hizo con fetch')

        return data;
    }
   
}


export class PokeApiAdapter implements httpAdapter{

    private readonly axios = axios;

    async get<T>(url:string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log('Esto se hizo con axios')
        return data;
    }

    async post(url: string, data: any){

    }

    async patch(url:string, data:any){

    }

    async delete(url:string){
        
    }

}