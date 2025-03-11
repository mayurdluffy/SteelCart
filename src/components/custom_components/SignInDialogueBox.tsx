import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import React from 'react'
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

const SignInDialogueBox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className='rounded-2xl border-2 h-[30px] my-1 mr-2'>Sign In</Button>
        </DialogTrigger>
        <DialogContent className="w-[40vw] h-[50vh] bg-gray-100">
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            {/* <DialogDescription>
              Purchase from us
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="Name" className="text-right">
                Name
              </Label>  
              <Input id="name" value="" className="col-span-3 rounded-2xl" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input id="username" value="" className="col-span-3 rounded-2xl" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Contact" className="text-right">
                Contact
              </Label>
              <Input id="username" value="" className="col-span-3 rounded-2xl" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" type="submit" className='rounded-2xl border-1 h-[30px] my-1 mx-1'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SignInDialogueBox