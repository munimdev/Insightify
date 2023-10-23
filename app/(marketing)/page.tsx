import Link from "next/link"
import {
  BarChart,
  Database,
  DollarSign,
  FastForward,
  HeartHandshake,
  LayoutDashboard,
  Maximize2,
} from "lucide-react"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Analytics } from "../../components/analytics"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/FaizaanAlFaisal/CapstoneProjectUG",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pt-6 md:pt-10 lg:pt-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link> */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Democratizing Data Analytics for Everyone
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Unlock the power of data-driven decision-making with our affordable,
            user-friendly platform.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href="#features"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" })
              )}
            >
              Explore Features
            </Link>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link> */}
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why Choose Us?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We offer a range of features designed to empower your business
            through data.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <FeatureCard
            title="Easy-to-Use Interface"
            description="Our platform is designed to be intuitive and user-friendly."
            Icon={Maximize2}
          />
          <FeatureCard
            title="Affordable Pricing"
            description="We offer competitive pricing plans that fit your budget."
            Icon={DollarSign}
          />
          <FeatureCard
            title="Real-Time Analytics"
            description="Get real-time insights into your business data for quick decisions."
            Icon={BarChart}
          />
          <FeatureCard
            title="Secure Data Storage"
            description="Your data is stored securely in compliance with industry standards."
            Icon={Database}
          />
          <FeatureCard
            title="24/7 Support"
            description="Our customer support team is available around the clock to assist you."
            Icon={HeartHandshake}
          />
          <FeatureCard
            title="Scalability"
            description="Our platform scales with your business, supporting your growth."
            Icon={LayoutDashboard}
          />
        </div>
      </section>
    </>
  )
}

const FeatureCard = ({ title, description, Icon }) => (
  <div className="relative overflow-hidden rounded-lg border bg-background p-2">
    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <Icon size={32} />
      <div className="space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
)
