"use client"

import { useState, useRef, } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

const formSchema = z.object({
  user_email: z.string().email({
    message: "Make sure your email is valid"
  }),
})

const Subscribe = () => {

  let formRef = useRef<HTMLFormElement | null>(null)
  const [ isSent, setIsSent ] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: "",
    },
  })
 
  async function onSubmit() {
    try {
      setIsSent(true)
      await emailjs.sendForm(
        `service_rmwmc99`,
        `template_re4yhnn`,
        formRef.current!,
        `BmFq-FHz4XeMcF8W8`
      );
      toast({
        description: "You have successfully subscribed.",
      }); 
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSent(false);
    } finally {
      setIsSent(false);
    }
  }

  return (
    <Form {...form}>
      <form 
        ref={formRef} 
        className="space-y-2"
        onSubmit={form.handleSubmit(onSubmit)} 
      >
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to get special offers</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              {!isSent ? (
              <Button className='w-full' type="submit">Submit</Button>
              ) : (
                <Button disabled className='w-full'>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Button>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default Subscribe