import { useEffect, useState } from "react";

import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { Menu } from "..";
import { Container, Input, Lgpd } from "./style";

const FormReg = () => {
  const cookies = new Cookies();
  const [isActive, setIsActive] = useState({
    street: "",
    state: "",
    district: "",
    city: "",
    name: "",
    dateBithDay: "",
    cep: "",
  });
  const [fullDataForm, setFullDataForm] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (fullDataForm.length !== 0) {
      localStorage.setItem("register", JSON.stringify(fullDataForm));
      cookies.set("Register", JSON.stringify(fullDataForm), {
        path: "/register",
      });
      toast.success("Cadastro efetuado com sucesso!");
      setTimeout(() => {
        return window.location.reload();
      }, 5000);
    }
  }, [fullDataForm, cookies]);

  function onHandlerName(ev) {
    ev.preventDefault();
    let nm = ev.target.value.length;

    if (nm >= 3) {
      setIsActive((prevState) => {
        return {
          ...prevState,
          name: ev.target.value,
        };
      });
      return;
    }
    toast.warn("Por favor insira um nome que possua mais de 3 caracteres!");
    return;
  }

  function onHandlerDate(ev) {
    const actDate = new Date();
    const yearDate = actDate.getFullYear();
    let valid = new Date(ev.target.value).getFullYear();
    let yearsValid = yearDate - valid;

    if (yearsValid < 18) {
      toast.warn("Você precisa ser maior de idade para concluir o cadastro!");
      return;
    } else {
      setIsActive((prevState) => {
        return {
          ...prevState,
          dateBithDay: ev.target.value,
        };
      });
    }
  }

  function onblurCEP(ev) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((res) => {
        setIsActive((prevState) => {
          return {
            ...prevState,
            street: res.logradouro,
            district: res.bairro,
            state: res.uf,
            city: res.localidade,
            cep: res.cep,
          };
        });
      })
      .catch((error) => {
        toast.warn(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }

  function onHandlerInput(ev) {
    Object.keys(isActive).map((item) => {
      if (isActive[item] === "") {
        let name = ev.target.name;

        switch (name) {
          case "city":
            return setIsActive((prevState) => {
              return {
                ...prevState,
                city: ev.target.value,
              };
            });
          case "street":
            return setIsActive((prevState) => {
              return {
                ...prevState,
                street: ev.target.value,
              };
            });
          case "district":
            return setIsActive((prevState) => {
              return {
                ...prevState,
                district: ev.target.value,
              };
            });
          case "state":
            return setIsActive((prevState) => {
              return {
                ...prevState,
                state: ev.target.value,
              };
            });
          default:
            return "";
        }
      }

      return "";
    });
  }

  function onHandlerSubmit(ev) {
    ev.preventDefault();
    let vl = Object.keys(isActive).filter((item) => item !== "");

    if (vl.length === 7) {
      setFullDataForm((prev) => {
        return { ...prev, isActive };
      });
      setIsValid(true);
      return;
    }
  }

  return (
    <Container>
      <Menu />
      <form onSubmit={onHandlerSubmit}>
        <h2>Register</h2>
        <p>
          welcome to the registration section! <br />
          Enter the data to complete the operation.
        </p>
        <Input>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onBlur={onHandlerName}
            defaultValue={isActive.name}
            required
          />
          <input
            type="date"
            name="Birth-Date"
            placeholder="Birth Date"
            defaultValue={isActive.dateBithDay}
            onChange={onHandlerDate}
            required
          />
          <input
            type="cep"
            name="cep"
            placeholder="CEP"
            onBlur={onblurCEP}
            defaultValue={isActive.cep}
            required
          />
          <input
            type="text"
            placeholder="Street"
            defaultValue={isActive.street}
            name="street"
            onBlur={onHandlerInput}
            required
          />
          <input
            type="text"
            placeholder="District"
            defaultValue={isActive.district}
            name="district"
            onBlur={onHandlerInput}
            required
          />
          <input
            type="text"
            placeholder="City"
            defaultValue={isActive.city}
            name="city"
            onBlur={onHandlerInput}
            required
          />
          <input
            type="text"
            placeholder="State"
            defaultValue={isActive.state}
            name="state"
            onBlur={onHandlerInput}
            required
          />
          <Lgpd>
            <span>
              Ao clicar no botão "Registar", você autoriza a Healthy Food
              armazenar e utilizar os meus dados.
            </span>
          </Lgpd>
        </Input>
        <button type="submit">Register</button>
      </form>
    </Container>
  );
};

export default FormReg;
