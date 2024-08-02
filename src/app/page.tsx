import Header from "@/components/layout/Header"
import Icon from "@/components/ui/Icon/Icon"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-dark-900">
      <div className="mx-auto flex max-w-screen-xl flex-1">
        <div className="flex flex-1 flex-col">
          <Header />

          <div className="m-auto flex flex-col gap-2 py-32 text-center">
            <h1 className="text-5xl font-bold text-white">
              Hello, I am <b className="text-highlight">Dan</b>
            </h1>
            <p className="text-lg text-white/80">I am glad you are here!</p>
            <div className="mt-8 flex flex-col gap-2">
              <p className="text-base">You can definitely find me here:</p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/daniel-santos-rocha-32201015a/"
                  className="h-8 w-8"
                >
                  <Icon name="linkedin" />
                </Link>
                <Link href="mailto:hello@daniscoding.com" className="h-8 w-8">
                  <Icon name="gmail" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
