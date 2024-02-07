import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <article className="grid items-center gap-8 mx-auto">
        <div className="grid gap-1 justify-center text-center">
            <h1 className="uppercase tracking-wider text-xl xs:text-2xl sm:text-4xl font-bold mt-20">Contact</h1>
            <p className="text-muted-foreground max-w-[750px] text-sm">
                Let&apos;s collaborate to turn your web vision into reality!
            </p>
        </div>
        <ContactForm />
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>
        <p className=' max-w-xl mx-auto mb-20 text-sm xs:text-base'>
            Feel free to reach out, and let&apos;s discuss how I can contribute to the success of your project.
            <br /> <br />
            Looking forward to the opportunity of working together!
            <br /><br />
            <span>Best regards,</span>
            <br />
            <span className=' italic font-semibold text-muted-foreground text-sm'>Amr Khaled</span>
        </p>
    </article>
  )
}

export default Contact