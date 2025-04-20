mod ast;
mod compiler;
mod parser;
use clap::{Arg, Command};
use compiler::*;
use parser::*;
use std::path::Path;

fn main() {
    // Command line
    let matches = Command::new("Verbena")
        .version(env!("CARGO_PKG_VERSION"))
        .about("Verbena compiler")
        .arg(Arg::new("file").help("Source file").required(true).index(1))
        .get_matches();

    // Input
    let file = matches.get_one::<String>("file").unwrap();
    let ast = parse(file);

    // Output
    let base_name = Path::new(file)
        .file_stem()
        .and_then(|os_str| os_str.to_str())
        .unwrap_or("");
    let output = format!("target/{}.mjs", base_name);
    compile(&ast, &output);
}
