import Link from "next/link"
import Subscribe from "./Subscribe"

const Footer = () => {

    const year = new Date().getFullYear()

    const footerListClass = "text-sm text-muted-foreground transition-colors hover:text-foreground"

  return (
    <footer className="w-full border-t">
      <div className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <Link href="/">
            <div className="flex w-fit space-x-2">
              <h2 className=" font-bold">Amr Khaled</h2>
            </div>
          </Link>
        <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
          <div>
            <h3 className=" text-base font-medium">Lobby</h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li>
                  <Link className={footerListClass} href="/">Home</Link>
                </li>
                <li>
                  <Link className={footerListClass} href="#about">About</Link>
                </li>
                <li>
                  <Link className={footerListClass} href="#projects">Projects</Link>
                </li>
                <li>
                  <Link className={footerListClass} href="#contact">Contact</Link>
                </li>
              </ul>
          </div>
          <div>
            <h3 className=" text-base font-medium">Social</h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li>
                  <Link
                    className={footerListClass}
                    href="https://www.instagram.com/amrrkhaled_9/" 
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerListClass}
                    href="https://www.facebook.com/profile.php?id=100022542018631" 
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerListClass}
                    href="https://github.com/amr12338kh" 
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    className={footerListClass} 
                    href="https://www.linkedin.com/in/amr-khaled-a411bb217/" 
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
          </div>

          <div>
            <h3 className=" text-base font-medium">Credits</h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link
                  className={footerListClass}
                  href="https://ui.shadcn.com/"
                  target="_blank" 
                >
                  shadcn/ui
                </Link>
              </li>
              <li>
                <Link
                  className={footerListClass}
                  href="https://react-icons.github.io/react-icons/" 
                  target="_blank"
                >
                  React Icons
                </Link>
              </li>
              <li>
                  <Link
                    className={footerListClass}
                    href="https://www.emailjs.com/" 
                    target="_blank"
                  >
                    EmailJS
                  </Link>
              </li>
              <li>
                  <Link
                    className={footerListClass}
                    href="https://www.freepik.com/" 
                    target="_blank"
                  >
                    Freepik
                  </Link>
              </li>
            </ul>
          </div>
        </section>
        <Subscribe />
        </div>
          <div className="flex flex-col justify-center items-center mt-3">
              <p className="text-gray-400 text-sm">
                ©{year} Amr Khaled&apos;s Portfolio.
              </p>
              <div className=" mt-2">
                <p className="text-gray-400 text-xs">
                  Built by 
                  <Link 
                    href="/https://github.com/amr12338kh" 
                    className="text-gray-600 font-semibold "
                  >
                    Amr Khaled.
                  </Link>
                </p>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer