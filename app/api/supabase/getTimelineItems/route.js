import { supabase } from '@supabase/auth-ui-shared';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );

  const getDataTypeIcon = async (dataTypeName) => {
    try {
      const { data: timeline_data_types, error } = await supabase
        .from('timeline_data_types')
        .select()
        .eq('name', dataTypeName)
        .single();

      const icon = timeline_data_types.icon;

      return NextResponse.json({ icon, error });
    } catch (error) {
      console.error(error);
    }
  };

  try {
    const { data: timeline_items, error } = await supabase
      .from('timeline_items')
      .select()
      .order('start_date', { ascending: true });

    const timelineItemsWithIcons = await Promise.all(
      timeline_items.map(async (item) => {
        const iconRes = await getDataTypeIcon(item.type);
        const dataTypeIcon = await iconRes.json();

        const icon = dataTypeIcon.icon;
        return { ...item, icon };
      })
    );

    return NextResponse.json({ timeline_items: timelineItemsWithIcons, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
