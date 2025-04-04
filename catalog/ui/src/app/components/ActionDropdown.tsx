import React from 'react';
import { Dropdown, DropdownItem, DropdownPosition, DropdownToggle } from '@patternfly/react-core/deprecated';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { SVGIconProps } from '@patternfly/react-icons/dist/js/createIcon';

import './action-dropdown.css';

const ActionDropdown: React.FC<{
  actionDropdownItems: any;
  className?: string;
  isDisabled?: boolean;
  position: DropdownPosition | 'right' | 'left';
  icon?: React.ComponentClass<SVGIconProps>;
  isPlain?: boolean;
}> = ({ actionDropdownItems, className, isDisabled = false, position, icon, isPlain = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const Icon = icon;
  return (
    <Dropdown
      className={`action-dropdown${className ? ` ${className}` : ''}`}
      isOpen={isOpen}
      onSelect={() => setIsOpen(false)}
      position={position}
      isPlain={isPlain}
      toggle={
        <DropdownToggle
          toggleIndicator={isPlain ? null : CaretDownIcon}
          isDisabled={isDisabled}
          onToggle={() => setIsOpen((v) => !v)}
        >
          {icon ? <Icon /> : 'Actions'}
        </DropdownToggle>
      }
      dropdownItems={actionDropdownItems}
    />
  );
};

const ActionDropdownItem: React.FC<{
  isDisabled?: boolean;
  label: string;
  onSelect: () => void;
  className?: string;
  icon?: React.ReactNode;
}> = ({ label, className, isDisabled = false, onSelect, icon }) => {
  return (
    <DropdownItem
      className={className}
      key={label}
      isDisabled={isDisabled}
      onClick={() => (isDisabled === true ? null : onSelect())}
      icon={icon}
    >
      {label}
    </DropdownItem>
  );
};

export { ActionDropdown, ActionDropdownItem };
