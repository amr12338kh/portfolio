"use client";
import Link from "next/link";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const Alert = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { toast } = useToast();

  const handleOpen = () => {
    setIsOpen(!isOpen);
    toast({
      title: "Out dated version!",
      description: "you can visit the new version from here",
      action: (
        <Link href="https://amr-portfolio-dev.vercel.app">
          <ToastAction altText="Go to the new version">Go</ToastAction>
        </Link>
      ),
    });
  };

  return (
    <AlertDialog open={isOpen ? true : false}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>This is an out dated version</AlertDialogTitle>
          <AlertDialogDescription>
            There&apos;s a new version is finaly out!, you can visit the new
            version from here
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleOpen}>Cancel</AlertDialogCancel>
          <Link href="https://amr-portfolio-dev.vercel.app">
            <AlertDialogAction>Check it out</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
