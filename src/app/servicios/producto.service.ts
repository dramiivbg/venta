import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from "../modelos/producto";
import { File } from "../modelos/file";
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';
import * as firestore from 'firebase/app';

firestore.default.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
/*
  Timestamp = firestore.default.firestore.Timestamp;

  private noticiaCollection: AngularFirestoreCollection<Producto>;
  private filePath: any;
  private url: Observable<string>;

  constructor(private afs: AngularFirestore, private storage : AngularFireStorage,private ur: Observable<string>) {
  
    this.noticiaCollection=afs.collection<Producto>('noticias', ref => ref.orderBy('fecha' , 'desc').limit(25));
  
     this.url = ur;
  }



  public obtenerNoticias(): Observable<Producto[]>{

    return this.noticiaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        Object.keys(data).filter(key => data[key] instanceof this.Timestamp)
                        .forEach(key => data[key] = data[key].toDate());
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )

  }

  public obtenerUnaNoticia(id : string): Observable<Noticia>{
    return  this.afs.doc<Noticia>(`noticias/${id}`).valueChanges().pipe(
       map(a=> {

        const notic={
          id : id,
          texto: a.texto,
          tituloNoticia: a.tituloNoticia,
          imagen: a.imagen,
          fileRef: a.fileRef
        }

         return notic;
       }
        ));;
  }

  private cargarImagen(noticia:Noticia, imagen: File){

   this.filePath= `imagenes/${imagen.name}`;
   const fileRef = this.storage.ref(this.filePath);
   const tarea = this.storage.upload(this.filePath, imagen);
   tarea.snapshotChanges().pipe(

      finalize (()=>{
        fileRef.getDownloadURL().subscribe(urlImage=> {
          this.url= urlImage;
         this.guardarNoticia(noticia);
        })
      })

     ).subscribe();

  }

  private guardarNoticia(noticia : Noticia){

    const ntc = {
      tituloNoticia: noticia.tituloNoticia,
      texto: noticia.texto,
      imagen: this.url,
      fileRef: this.filePath,
      fechaRealizacion: new Date(),
      fecha: new Date().getTime()
    };

    if(noticia.id){

      return this.noticiaCollection.doc(noticia.id).update(ntc);

    }else{
      return this.noticiaCollection.add(ntc);
    }

  }

  PreguardarNoticia(noticia: Noticia, imagen : File): void{

    this.cargarImagen(noticia, imagen);
  }

  public actualizarNoticia( data: Noticia, id: string, newImage?: File){


const ntc = {
  id: id,
  tituloNoticia: data.tituloNoticia,
  texto: data.texto,
  imagen: data.imagen
}


    if (newImage){

      this.cargarImagen(ntc, newImage);

    }else{
      return this.noticiaCollection.doc(id).update(data);
    }

  }

public delete(id: string){

  return this.noticiaCollection.doc(id).delete();

}
*/
}
