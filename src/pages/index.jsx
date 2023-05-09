import LikeButton from '@/components/Buttons/LikeButton'
import Header from './_header'
import HomeLayout from "@/layouts/Home/HomeLayout"



export default function Home() {
  return (
    <>
      <Header title="Home" />
      <HomeLayout>
        <LikeButton active={false} likes="999K" />
      </HomeLayout>
    </>
  )
}
