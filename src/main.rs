use open;
use std::time::Duration;
use std::thread;

fn main() {
    let urls = vec![
        "https://example.com",
        "https://rust-lang.org",
        "https://docs.rs",
    ];

    for url in &urls {
        if let Err(e) = open::that(url) {
            eprintln!("Failed to open {}: {}", url, e);
        } else {
            println!("Opened: {}", url);
        }
        // Optional: Add a delay between opening tabs
        thread::sleep(Duration::from_secs(2));
    }
}
