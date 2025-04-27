import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps, ReactNode } from 'react';
import { Platform, Pressable } from 'react-native';

type Props = Omit<ComponentProps<typeof Pressable>, 'onPress'> & { href: string, children: ReactNode };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      {...rest}
      href=""
      onPress={async (event: any) => {
        event.preventDefault();
        
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
