import emailjs from "emailjs-com";
import Button from "../button";
import Input from "./components/input";
import { ArrowRight } from "@phosphor-icons/react";
import * as S from "./styles";
import officeWork from "../../assets/Office work-bro.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface dataProps {
  name: string;
  email: string;
  message: string;
}

const schema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Insira um e-mail válido"),
  message: z
    .string()
    .min(5, "A mensagem deve ter pelo menos 5 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<dataProps>({
    resolver: zodResolver(schema)
  });

  const sendEmail = (data: dataProps) => {
  const emailPromise = emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  toast.promise(emailPromise, {
    loading: 'Enviando sua mensagem...',
    success: () => {
      reset();
      return 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    },
    error: (err) => {
      console.error(err);
      return 'Ops! Ocorreu um erro ao enviar. Tente novamente mais tarde.';
    },
  });
};

  return (
    <S.Container>
      <S.Profile>
        <S.Image src={officeWork} alt="image profile" />
        <span>Contato</span>
        <h2>Entre em contato</h2>
        <p>
          Caso tenha uma proposta de trabalho ou deseje discutir um projeto específico, sinta-se à vontade para entrar em contato através do formulário abaixo ou pelas minhas redes profissionais
        </p>
        <S.Socials>
          <S.ButtonSocial
            href="https://github.com/LeonardoSantos16"
            target="_blank"
          >
            <IoLogoGithub color="#F5F6F6" size={24} />
          </S.ButtonSocial>
          <S.ButtonSocial
            href="https://www.linkedin.com/in/leonardo-mendes-ferreira-/"
            target="_blank"
          >
            <IoLogoLinkedin color="#F5F6F6" size={24} />
          </S.ButtonSocial>
        </S.Socials>
      </S.Profile>
      
      <S.Forms onSubmit={handleSubmit(sendEmail)}>
        <Input 
          {...register("name")} 
          placeholder="Seu nome" 
          errors={errors.name?.message} 
        />
        
        <Input 
          {...register("email")} 
          placeholder="Seu e-mail" 
          errors={errors.email?.message} 
        />

        <S.Textarea 
          {...register("message")} 
          placeholder="Sua mensagem" 
        />
        {errors.message && <S.Error>{errors.message.message}</S.Error>}

        <Button
          type="submit"
          Icon={ArrowRight}
          orderIcon="row"
          text="Enviar mensagem"
          width="225px"
          backgroundColor="#8A42DB"
          backgroundHoverColor="#9955E8"
        />
      </S.Forms>
    </S.Container>
  );
};

export default Contact;