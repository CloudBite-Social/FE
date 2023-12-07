import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import Alert from "@/components/alert";

import {
  User,
  getUser,
  deleteUser,
  updateUser,
  UpdateUserSchema,
  updateUserSchema,
} from "@/utils/apis/users";

import { CircleUserIcon, Loader2, Trash2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/CustomForm";
// import { useToken } from "@/utils/context/token";

const EditProfile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  // const { changeToken } = useToken();

  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getUser();
      setProfile(result.data);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const form = useForm<UpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: profile?.name! ?? "",
      email: profile?.email! ?? "",
      password: profile?.password! ?? "",
      image: profile?.image! ?? "",
    },
    values: {
      name: profile?.name!,
      email: profile?.email!,
      password: profile?.password!,
      image: "",
    },
  });

  const fileRef = form.register("image", { required: false });

  async function onSubmit(data: UpdateUserSchema) {
    // data.image = data.image[0].name;
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("image", data.image[0]);

      const result = await updateUser(formData as any);
      toast({ description: result.message });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteProfile() {
    try {
      const result = await deleteUser();
      toast({ description: result.message });
      // changeToken();
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="container flex justify-end">
        <Alert
          title="Are you absolutely sure?"
          description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          onAction={handleDeleteProfile}
        >
          <div className="p-3 rounded-md shadow-md hover:bg-red-500 dark:hover:bg-red-900 dark:border">
            <Trash2 />
          </div>
        </Alert>
      </div>
      <div className="h-full flex flex-col items-center justify-center gap-5">
        <div className="flex w-full md:w-2/3 lg:w-1/2 justify-between">
          <h1 className="text-4xl">Edit Profile</h1>
          <CircleUserIcon strokeWidth={1} size={80} />
        </div>
        <Form {...form}>
          <form
            className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField
              control={form.control}
              name="name"
              label="Full Name"
            >
              {(field) => (
                <Input
                  {...field}
                  placeholder={profile?.name}
                  type="text"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="image"
              label="Profile Picture"
            >
              {() => (
                <Input
                  {...fileRef}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  className="cursor-pointer"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField control={form.control} name="email" label="Email">
              {(field) => (
                <Input
                  {...field}
                  placeholder={profile?.email}
                  type="email"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
            >
              {(field) => (
                <Input
                  {...field}
                  placeholder={profile?.password}
                  type="password"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <div className="flex gap-6">
              <Button
                className="bg-white text-black border h-fit hover:bg-gray-200 hover:text-black mt-4"
                type="button"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </Button>
              <Button
                className="mt-4"
                type="submit"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default EditProfile;
