import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFeildProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeHolder?: string;
    type?: 'text' | 'password' | 'email'| 'file'
}

const FormField = ({name, control, label, placeholder, type='text'}: FormFeildProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input
              className="input"
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField