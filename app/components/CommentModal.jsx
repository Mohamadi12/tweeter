"use client"
import { useRecoilState } from "recoil"
import { modalState } from "../autom/modalAtom"

const CommentModal = () => {
    const [open, setOpen] = useRecoilState(modalState)

  return (
    <div>
        <h1>Comment</h1>
        {open && <h1>The modal is open</h1>}
    </div>
  )
}

export default CommentModal