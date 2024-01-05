import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import SidebarLayout from "@/Layouts/SidebarLayout";
import WorkspaceHome from "@/Pages/Workspace/Home";

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <SidebarLayout>
                <WorkspaceHome/>
            </SidebarLayout>
        </>
    );
}
