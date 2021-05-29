use actix_web::{ get, App, HttpResponse, HttpServer, Result };
use serde::{ Deserialize, Serialize };

/// # Main entry point of server
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| { App::new().service(hello) })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}

#[derive(Serialize, Deserialize)]
struct MyObj {
    name: String,
}

#[get("/")]
async fn hello() -> Result<HttpResponse> {
    let res = MyObj { name: String::from("Hello world") };
    Ok(HttpResponse::Ok().json(MyObj {
        name: res.name,
    }))
}