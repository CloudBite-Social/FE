import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  children: ReactNode;
  description?: string | any;
  onCancel?: () => {};
  onAction?: () => {};
};

const Alert = (props: Props) => {
  const { title, description, children, onCancel, onAction } = props;

  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="dark:bg-black/30">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onCancel}>Cancel</Button>
            {onAction && <Button onClick={onAction}>Continue</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Alert;
