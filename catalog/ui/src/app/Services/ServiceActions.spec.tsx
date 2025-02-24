import React from 'react';
import resourceClaimObj from '../__mocks__/resourceClaim.json';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { ResourceClaim } from '@app/types';
import ServiceActions from './ServiceActions';

jest.mock('@app/utils/useInterfaceConfig', () => {
  return jest.fn(() => ({
    incidents_enabled: true,
    ratings_enabled: true,
    status_page_id: '123',
    status_page_url: 'https://redhat.com',
    help_link: '',
    help_text: '',
    internal_help_link: '',
    sfdc_enabled: true,
    partner_connect_header_enabled: false,
  }));
});

describe('ServiceActions', () => {
  test('When ServiceActions layout renders, should display ServiceActions', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const testVar = getByText('Actions');
    await waitFor(() => expect(testVar).toBeInTheDocument());
  });

  test('When ServiceActions layout renders, should display Options Delete', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const button = screen.getByText('Actions');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Delete')).toBeInTheDocument());
  });

  test('When ServiceActions layout renders, should display Stop', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const button = screen.getByText('Actions');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Stop')).toBeInTheDocument());
  });

  test('When ServiceActions layout renders, should display Start', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const button = screen.getByText('Actions');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Start')).toBeInTheDocument());
  });

  test('When ServiceActions layout renders, should display Adjust Lifespan', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const button = screen.getByText('Actions');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Edit Auto-Destroy')).toBeInTheDocument());
  });

  test('When ServiceActions layout renders, should display Edit Auto-Stop', async () => {
    const openDeleteModal = jest.fn();
    const openScheduleActionModal = jest.fn();
    const openStartModal = jest.fn();
    const openStopModal = jest.fn();

    const { getByText } = render(
      <ServiceActions
        position="right"
        resourceClaim={resourceClaimObj as ResourceClaim}
        actionHandlers={{
          delete: () => openDeleteModal('resourceClaim'),
          lifespan: () => openScheduleActionModal('resourceClaim', 'retirement'),
          runtime: () => openScheduleActionModal('resourceClaim', 'stop'),
          start: () => openStartModal('resourceClaim', 'start'),
          stop: () => openStopModal('resourceClaim', 'stop'),
        }}
      />
    );
    const button = screen.getByText('Actions');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Edit Auto-Stop')).toBeInTheDocument());
  });
});
