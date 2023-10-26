import React from "react";
import useDesigner from "./hooks/useDesigner";
import { ElementsType, FormElementInstance, FormElements } from "./FormElement";
import { Button } from "./ui/button";
import { AiOutlineClose } from "react-icons/ai";
import { Separator } from "./ui/separator";

const PropertiesFormSidebar = () => {
  const { selectedElement, setSelectedElement } = useDesigner();

  const PropertiesForm =
    FormElements[selectedElement?.type as ElementsType].propertiesComponent;
  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/70">Element properties</p>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <Separator className="mb-4" />
      <PropertiesForm
        elementInstance={selectedElement as FormElementInstance}
      />
    </div>
  );
};

export default PropertiesFormSidebar;
