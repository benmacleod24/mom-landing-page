import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, ShieldAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SmallHomePhoto from "@/assets/small_home.jpg";

type FormSchema = z.infer<typeof formSchema>;
const formSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email({ message: "Invalid Email" }),
	phoneNumber: z.ostring(),
});

export default function JoinNewsletter() {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
	});

	async function onSubmit(values: FormSchema) {}

	return (
		<Layout mode="dark">
			<div className="grid lg:grid-cols-2 gap-20 py-10 lg:py-20 grid-flow">
				{/* Form Wrapper */}
				<div className="flex justify-center h-full flex-col">
					<div>
						<h1 className="text-3xl font-bold text-brand">
							Join My Newsletter!
						</h1>
						<p className="mt-1.5 text-muted-foreground">
							Stay ahead with the latest real estate market
							trends, expert tips, and inspiring design ideas
							delivered straight to your inbox.
						</p>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="grid gap-4 lg:max-w-xl mt-10"
						>
							{form.formState.errors.root && (
								<div className="p-3 border border-brand rounded-lg bg-brand/20 text-brand flex items-center gap-4">
									<ShieldAlert />
									<p>{form.formState.errors.root.message}</p>
								</div>
							)}
							<div className="grid sm:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												First Name
												<span className="text-brand">
													*
												</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Jennifer"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Last Name{" "}
												<span className="text-brand">
													*
												</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Macleod"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Email{" "}
											<span className="text-brand">
												*
											</span>
										</FormLabel>
										<FormControl>
											<Input
												autoComplete="email"
												{...field}
												placeholder="example@email.com"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phoneNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="(419)-344-7132"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="bg-brand hover:bg-brand/90 mt-5"
							>
								Join Newsletter!{" "}
								{form.formState.isSubmitting ? (
									<Loader2 className="animate-spin" />
								) : (
									<ArrowRight />
								)}
							</Button>
						</form>
					</Form>
				</div>

				{/* Image Container */}
				<div className="h-full">
					<img
						src={SmallHomePhoto}
						className="w-full h-full object-cover object-center rounded-lg drop-shadow"
					/>
				</div>
			</div>
		</Layout>
	);
}
