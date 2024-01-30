'use server'
 
import { redirect } from "next/navigation"
 
/*to /finance*/
export async function toFinance() {
  redirect('/private/finance')
}