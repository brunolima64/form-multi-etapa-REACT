import { ReactNode, createContext, useState } from "react";

type ContextType = {
    step: number;
    setStep: (n: number) => void;
    name: string;
    setName: (s: string) => void;
    level: number;
    setLevel: (n: number) => void;
    email: string;
    setGithub: (s: string) => void;
    github: string;
    setEmail: (s: string) => void;
}

export const InfoContext = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const InfoContextProvider = ({ children }: Props) => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);
    const [email, setEmail] = useState('');
    const [github, setGithub] = useState('');

    return (
        <InfoContext.Provider value={{  name, setName, level, setLevel, email, setEmail, github, setGithub, step, setStep } }>
            {children}
        </InfoContext.Provider>
    )

}